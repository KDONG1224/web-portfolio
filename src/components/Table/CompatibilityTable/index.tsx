// base
import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface CompatibilityTableProps {}

interface DataType {
  key: React.Key;
  title: string;
  icon: string;
  browser: string;
  apply: string;
}

export const CompatibilityTable: React.FC<CompatibilityTableProps> = ({}) => {
  const columns: ColumnsType<DataType> = [
    { title: 'Column 1', dataIndex: 'browser', key: '1' },
    { title: 'Column 2', dataIndex: 'browser', key: '2' },
    { title: 'Column 3', dataIndex: 'browser', key: '3' },
    { title: 'Column 4', dataIndex: 'browser', key: '4' },
    { title: 'Column 5', dataIndex: 'browser', key: '5' },
    { title: 'Column 6', dataIndex: 'browser', key: '6' },
    { title: 'Column 7', dataIndex: 'browser', key: '7' },
    { title: 'Column 8', dataIndex: 'browser', key: '8' }
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: '크롬 브라우저',
      browser: 'chrome',
      icon: 'ss',
      apply: '⭕️'
    },
  ];

  const App: React.FC = () => (
    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
  );

  return <Table columns={columns} dataSource={data} />;
};
