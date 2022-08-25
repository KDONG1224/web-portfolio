// base
import React from 'react';
import { useHistory } from 'react-router';

// style
import { StyledCss } from './style';

// conponents
import { PaginationTable } from 'components';
import { ROUTE_CSS_DETAIL_WITH_ID } from 'routes/const';
import { referenceApi } from 'modules/reference';
import { SWR_REFERENCE_KEY } from 'const';
import useSWR from 'swr';
import { ColumnsType } from 'antd/lib/table';
import { Button, Tag } from 'antd';

interface TableDataType {
  id: number;
  title: string;
  desc2: string;
  apply: string;
}

export const Css = () => {
  const history = useHistory();

  const handleMove = (record: any) => {
    console.log('record : ', record);
    return history.push(ROUTE_CSS_DETAIL_WITH_ID(record.id));
  };

  const getCssDatas = () => {
    return referenceApi.getCssRefer();
  };

  const { data } = useSWR([SWR_REFERENCE_KEY], () => getCssDatas());

  console.log('cssData : ', data);

  if (!data) return <></>;

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
      key: 'apply',
      dataIndex: 'apply',
      render: (_, tag) => (
        <Tag color='green' key={tag.id}>
          {tag.apply}
        </Tag>
      )
    },
    {
      title: '상세보기',
      align: 'center',
      render: (_, record) => (
        <>
          <Button
            className='btn-28 btn-primary color-white'
            type='primary'
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
    <StyledCss>
      <div className='css-head'>CSS 태그 설명</div>
      <PaginationTable
        columns={columns}
        dataSource={data}
        rowKey='id'
        showRowSelection={false}
        showPageSize={false}
        noAsync
        sort
      />
    </StyledCss>
  );
};
