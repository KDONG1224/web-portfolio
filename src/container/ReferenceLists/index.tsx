// base
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledReferenceLists } from './style';

// libraries
import { ColumnsType } from 'antd/lib/table';
import { Button, Select, Tag } from 'antd';

// components
import { PaginationTable } from 'components';

// const
import { ROUTE_REFERNCE_DETAIL_WITH_ID } from 'consts/route';
import { usePagination } from 'hooks';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SELCET,
  DEFAULT_PAGE_SIZE,
  DEFAULT_REFERENCE_SELCET,
  QUERY_REFERENCE_GET
} from 'consts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReferApi } from 'modules';

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
  const queryClient = useQueryClient();

  const [tableList, setTableList] = useState<any[]>([]);
  const [selectType, setSelectType] = useState<string>('전체보기');
  const [updateFilter, setUpdateFilter] = useState<any>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE
  });

  const router = useRouter();

  const referenceApi = useMemo(() => {
    return new ReferApi();
  }, []);

  const pagination = usePagination(
    setUpdateFilter,
    tableList.length,
    updateFilter.page,
    updateFilter.pageSize
  );

  const getReference = (filter: any) => {
    return referenceApi.getReferenceLists({ ...filter });
  };

  const onClickDetail = (id: string) => {
    router.push(ROUTE_REFERNCE_DETAIL_WITH_ID(String(id)));
  };

  const { mutate: getReferneceLists, isLoading } = useMutation<
    any,
    any,
    any,
    any
  >((filter) => getReference(filter), {
    onMutate: async () => {
      await queryClient.cancelQueries([QUERY_REFERENCE_GET]);
    },
    onSuccess: (datas) => {
      queryClient.invalidateQueries([QUERY_REFERENCE_GET]);
      setTableList(datas);
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([QUERY_REFERENCE_GET], context.prev);
    }
  });

  const handleSelect = (value: string) => {
    setSelectType(value);

    const filter = {
      type: value
    };

    getReferneceLists(value === 'all' ? '' : filter);
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
      title: '타입',
      dataIndex: 'type',
      key: 'type'
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

  useEffect(() => {
    setTableList(referenceLists);
  }, [referenceLists]);

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
            rowKey="id"
            loading={isLoading}
            columns={columns}
            dataSource={tableList}
            showRowSelection={false}
            showPageSize={true}
            pagination={{
              ...pagination,
              showSizeChanger: false,
              current: pagination.current,
              pageSize: pagination.pageSize
            }}
            onChangePageSize={setUpdateFilter}
            style={{
              marginTop: '1.4rem'
            }}
            customRight={
              <>
                <Select
                  style={{ width: 150, marginLeft: 5 }}
                  defaultValue={selectType}
                  value={selectType}
                  onChange={handleSelect}
                >
                  {DEFAULT_REFERENCE_SELCET.map(({ key, value }) => (
                    <Select.Option key={key} value={key}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </>
            }
          />
        </div>
      </div>
    </StyledReferenceLists>
  );
};
