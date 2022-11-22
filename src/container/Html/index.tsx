// base
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledHtml } from './style';

// components
import { ItemList, PaginationTable } from 'components';

// library
import useSWR from 'swr';
import { Button, Col, Row, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

// modules

// const
import { SWR_REFERENCE_KEY } from 'const';
import { ROUTE_HTML_DETAIL_WITH_ID } from 'const/route';
import { ReferApi } from 'modules';

// routes

interface TableDataType {
  id: number;
  title: string;
  desc2: string;
  tag: string;
}

const datas = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
}));

export const Html = () => {
  const [changeList, setChangeList] = useState('table');
  const router = useRouter();

  // api
  const referenceApi = useMemo(() => {
    return new ReferApi();
  }, []);

  const handleMove = (record: any) => {
    return router.push(ROUTE_HTML_DETAIL_WITH_ID(record.id));
  };

  const getAllDatas = async () => {
    return await referenceApi.getAllReference();
  };

  // swr
  const { data } = useSWR([SWR_REFERENCE_KEY], () => getAllDatas());

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

  const onChange = (type: string) => {
    if (type === 'table') return setChangeList('table');
    if (type === 'list') return setChangeList('list');
    if (type === 'box') return setChangeList('box');
  };

  return (
    <StyledHtml>
      <div className="html-head">HTML 태그 설명</div>
      <div className="html-body">
        <div className="html-body-button">
          <Button onClick={() => onChange('table')}>테이블</Button>
          <Button onClick={() => onChange('box')}>박스</Button>
          <Button onClick={() => onChange('list')}>리스트</Button>
        </div>
        <div className="html-body-contents">
          {changeList === 'table' && (
            <PaginationTable
              columns={columns}
              dataSource={data || []}
              rowKey="id"
              showRowSelection={false}
              showPageSize={false}
              noAsync
              sort
              style={{
                marginTop: '1.4rem'
              }}
            />
          )}

          {changeList === 'list' && <ItemList />}
          {changeList === 'box' && (
            <div>
              <Row gutter={[24, 24]}>
                {datas.map((item, idx) => {
                  return (
                    <Col
                      key={idx}
                      className="item-box"
                      span={6}
                      style={{ width: '150px', height: '150px' }}
                    >
                      {item.title}
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </div>
      </div>
    </StyledHtml>
  );
};
// http://localhost:4444/reference/all
// http://localhost:4444/reference/create
