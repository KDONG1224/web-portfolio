// base
import React, { useMemo, useState } from 'react';

// style
import { StyledPaginationTable } from './style';

// library
import {
  Col,
  PaginationProps,
  Row,
  Select,
  Space,
  Table,
  TableProps
} from 'antd';
import { ColumnsType } from 'antd/lib/table';
import DoubleScrollbar from 'react-shadowed-double-scrollbar';
import { useEffect } from 'react';

// defines
const DEFAULT_PAGE_SIZE = 100;
const pageSizeRange = [10, 20, 50, 100];

interface PaginationTableProps<T> extends TableProps<T> {
  noAsync?: boolean;
  noIndex?: boolean;
  columns: ColumnsType<T>;
  customLeft?: React.ReactNode;
  customRight?: React.ReactNode;
  showPageSize?: boolean;
  showRowSelection?: boolean;
  showPagination?: boolean;
  onChangePageSize?: (page: number, pageSize: number) => void;
  onChangeExpose?: (value: boolean) => void;
  isNotWrapMarginTop?: boolean;
  headerInfoMessage?: string | React.ReactNode;
  noPadding?: boolean;
  noSearchResult?: boolean;
  sort?: boolean;
}

interface Pagination extends PaginationProps {
  total: number;
  current: number;
  pageSize: number;
  showSizeChanger: boolean;
}

const doubleScroll = ({ ...restProps }) => {
  if (typeof window !== 'object') return <div />
  
  return (
    <DoubleScrollbar>
      <table {...restProps}></table>
    </DoubleScrollbar>
  );
};

export const PaginationTable = (props: PaginationTableProps<any>) => {
  const {
    noAsync = false,
    noIndex = false,
    columns,
    dataSource,
    customLeft,
    customRight,
    showPageSize = true,
    showRowSelection = true,
    showPagination = true,
    onChangePageSize,
    onChangeExpose,
    isNotWrapMarginTop = false,
    headerInfoMessage,
    noPadding,
    noSearchResult = false,
    sort = false,
    ...tableOptions
  } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[] | any>([]);
  const [isLength, setIsLength] = useState(0);

  const hasSelected = useMemo(() => {
    return selectedRowKeys.length > 0;
  }, [selectedRowKeys]);

  const pagination = useMemo<Pagination>(() => {
    return {
      total: 0,
      current: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      showSizeChanger: false,
      showPagination: true,
      ...tableOptions.pagination
    };
  }, [tableOptions.pagination]);

  const rowSelection = useMemo(() => {
    if (showRowSelection) {
      return {
        preserveSelectedRowKeys: true,
        selectedRowKeys,
        onChange: (value: React.ReactText[]) => {
          if (!value) return null;
          setSelectedRowKeys(value);
        },
        ...tableOptions.rowSelection
      };
    } else {
      return;
    }
  }, [tableOptions.rowSelection, selectedRowKeys, showRowSelection]);

  const handleChangePageSize = (pageSize: number) => {
    if (pagination.onChange) {
      pagination.onChange(1, pageSize);
    }
  };

  const handleLength = () => {
    if (!dataSource) return null;
    setIsLength(dataSource?.length);
  };

  useEffect(() => {
    handleLength();
  }, [dataSource]);

  return (
    <StyledPaginationTable
      isNotWrapMarginTop={isNotWrapMarginTop}
      noPadding={noPadding}
    >
      <Row className='table-header' justify='space-between'>
        {pagination.total !== null && (
          <Col>
            <Space>
              <div className='totalCount-txt'>
                <span>
                  {noSearchResult
                    ? `총 ${pagination.total || dataSource?.length || 0} 건`
                    : `총 ${pagination.total || dataSource?.length || 0} 건`}
                </span>
              </div>
            </Space>
          </Col>
        )}
        <Col>
          {showPageSize && (
            <Select
              className='option-36'
              style={{ width: '15rem', marginLeft: '0.5rem' }}
              defaultValue={DEFAULT_PAGE_SIZE}
              value={pagination.pageSize ? pagination.pageSize : undefined}
              onChange={handleChangePageSize}
            >
              {pageSizeRange.map(size => (
                <Select.Option key={size} value={size}>
                  {size}개씩 보기
                </Select.Option>
              ))}
            </Select>
          )}
        </Col>
      </Row>
      <Table
        {...tableOptions}
        pagination={showPagination ? pagination : false}
        rowSelection={rowSelection}
        columns={
          noIndex
            ? columns
            : sort
            ? [
                {
                  title: 'No',
                  dataIndex: 'index',
                  key: 'index',
                  sorter: (a: any, b: any) => {
                    return b.id - a.id;
                  },
                  render: (_, record, index) => {
                    if (!noAsync) {
                      return (
                        pagination.total -
                        index -
                        (pagination.current * pagination.pageSize -
                          pagination.pageSize)
                      );
                    } else {
                      return isLength + index - isLength + 1;
                    }
                  }
                },
                ...columns
              ]
            : [
                {
                  title: 'No',
                  dataIndex: 'index',
                  key: 'index',
                  render: (_, record, index) => {
                    if (!noAsync) {
                      return (
                        pagination.total -
                        index -
                        (pagination.current * pagination.pageSize -
                          pagination.pageSize)
                      );
                    } else {
                      return pagination.total - index;
                    }
                  }
                },
                ...columns
              ]
        }
        size='small'
        // dataSource={(dataSource || []).slice(0, pagination.pageSize)}
        dataSource={dataSource}
        components={{ table: doubleScroll }}
      />
    </StyledPaginationTable>
  );
};
