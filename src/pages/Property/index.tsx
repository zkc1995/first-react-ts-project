import React from 'react';
import { Table, Space } from 'antd';
import BaseContent from '../../components/BaseContent';

const Property: React.FC = () => {
  const columns = [
    {
      title: '月份',
      dataIndex: 'month',
    },
    {
      title: '收入',
      dataIndex: 'income',
    },
    {
      title: '支出',
      dataIndex: 'pay',
    },
  ];
  const data = [
    {
      key: '1',
      month: '1月',
      income: 4000,
      pay: 10000,
    },
    {
      key: '2',
      month: '2月',
      income: 4000,
      pay: 10000,
    },
    {
      key: '3',
      month: '3月',
      income: 4000,
      pay: 10000,
    },
  ];

  return (
    <BaseContent title="财产">
      <Space>
      </Space>
      <Table columns={columns} dataSource={data} size="middle" />
    </BaseContent>
    
  );
};

export default Property;