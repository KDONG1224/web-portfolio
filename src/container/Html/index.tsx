// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledHtml } from './style';

// components
import { PaginationTable } from 'components';

// library
import useSWR from 'swr';
import { Button, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

// modules

// const
import { SWR_REFERENCE_KEY } from 'const';
import { ROUTE_HTML_DETAIL_WITH_ID } from 'const/route';

// routes

interface TableDataType {
  id: number;
  title: string;
  desc2: string;
  tag: string;
}

export const Html = () => {
  const router = useRouter();

  const handleMove = (record: any) => {
    console.log('record : ', record);
    return router.push(ROUTE_HTML_DETAIL_WITH_ID(record.id));
  };

  const getHtmlDatas = () => {
    console.log('html');
    console.log('htmltltltmtlmhlhmltmhltmhltm');
  };

  const { data } = useSWR([SWR_REFERENCE_KEY], () => getHtmlDatas());

  console.log('htmlData : ', data);

  const columns: ColumnsType<TableDataType> = [
    {
      title: '태그 이름',
      dataIndex: 'title',
      key: 'title'
      // render: text => <p>{text}</p>
    },
    {
      title: '설명',
      dataIndex: 'desc2',
      key: 'desc2'
    },
    {
      title: '태그',
      key: 'tag',
      dataIndex: 'tag',
      render: (_, tag) => (
        <Tag color="blue" key={tag.id}>
          {tag.tag}
        </Tag>
      )
    },
    {
      title: '상세보기',
      align: 'center',
      render: (_, record) => (
        <>
          <Button
            className="btn-28 btn-primary color-white"
            type="primary"
            onClick={() => {
              handleMove(record);
            }}
          >
            상세보기
          </Button>
        </>
      )
    }
  ];

  return (
    <StyledHtml>
      <div className="html-head">HTML 태그 설명</div>
      <PaginationTable
        columns={columns}
        dataSource={data || []}
        rowKey="id"
        showRowSelection={false}
        showPageSize={false}
        noAsync
        sort
      />
    </StyledHtml>
  );
};
