// base
import React from 'react';

// style
import { StyledItemList } from './style';

// libraries
import { Avatar, List, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

interface ItemListPorps {}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
}));

export const ItemList: React.FC<ItemListPorps> = ({}) => {
  return (
    <StyledItemList>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />
            ]}
            extra={
              <Image
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                alt="logo"
                width={100}
                height={100}
              />
            }
          >
            <List.Item.Meta
              title={<Link href={item.href}>{item.title}</Link>}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </StyledItemList>
  );
};
