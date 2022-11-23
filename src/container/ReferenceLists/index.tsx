// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledReferenceLists } from './style';

// libraries
import { ColumnsType } from 'antd/lib/table';
import { Button, Tag } from 'antd';

// components
import { PaginationTable } from 'components';

// const
import { ROUTE_REFERNCE_DETAIL_WITH_ID } from 'const/route';

interface TableDataType {
  id: number;
  title: string;
  description: string;
  tag: string;
}

interface ReferenceListsProps {
  referenceLists: any;
}

export const ReferenceLists: React.FC<ReferenceListsProps> = ({
  referenceLists
}) => {
  const router = useRouter();

  // const referenceApi = useMemo(() => {
  //   return new ReferApi();
  // }, []);

  // const getHtmlDatas = async () => {
  //   return await referenceApi.getAllReference();
  // };

  // const { data: allHtmlDatas } = useQuery<any, unknown, any[]>(
  //   [QUERY_REFERENCE_GET_ALL],
  //   () => getHtmlDatas(),
  //   {
  //     select: (data) => data
  //   }
  // );

  const onClickDetail = (id: string) => {
    router.push(ROUTE_REFERNCE_DETAIL_WITH_ID(String(id)));
  };

  const columns: ColumnsType<TableDataType> = [
    {
      title: '태그 이름',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '설명',
      dataIndex: 'description',
      key: 'description'
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
              onClickDetail(String(record.id));
            }}
          >
            상세보기
          </Button>
        </>
      )
    }
  ];

  return (
    <StyledReferenceLists>
      <div className="refer-head">레퍼런스</div>
      <div className="refer-body">
        {/* <div className="refer-body-button">
          <Button onClick={() => onChange('table')}>테이블</Button>
          <Button onClick={() => onChange('box')}>박스</Button>
          <Button onClick={() => onChange('list')}>리스트</Button>
        </div> */}
        <div className="refer-body-contents">
          <PaginationTable
            columns={columns}
            dataSource={referenceLists || []}
            rowKey="id"
            showRowSelection={false}
            showPageSize={false}
            noAsync
            sort
            style={{
              marginTop: '1.4rem'
            }}
          />
        </div>
      </div>
    </StyledReferenceLists>
  );
};
