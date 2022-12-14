// base
import React, { useState } from 'react';

// style
import { StyledMobileMainLists } from './style';

// libraries
import { Avatar, List, Space } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { BlurImage } from 'components';
import { useRouter } from 'next/router';
import { ROUTE_REFERNCE_DETAIL_WITH_ID } from 'consts/route';
import { useMedia } from 'hooks';

interface MobileMainListsProps {
  datas: any[];
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const MobileMainLists: React.FC<MobileMainListsProps> = ({
  datas,
  ...props
}) => {
  const router = useRouter();
  const { isMobile } = useMedia();

  const [pagesize, setPagesize] = useState(10);

  const handleClick = (id: string) => {
    router.push(ROUTE_REFERNCE_DETAIL_WITH_ID(id));
    return;
  };

  return (
    <StyledMobileMainLists {...props}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={datas}
        style={{ paddingBottom: 60 }}
        pagination={{
          onChange: (_, pageSize) => {
            setPagesize(pageSize);
            document.querySelector('.ant-layout-content')?.scrollTo(0, 0);
          },
          pageSize: pagesize
        }}
        renderItem={(item) => {
          const { title, thumbmnaile, description, id, type } = item;

          return (
            <List.Item
              key={title}
              onClick={() => handleClick(id)}
              extra={
                <BlurImage
                  src={thumbmnaile}
                  width={272}
                  height={207}
                  alt={title}
                  objectFit="cover"
                />
              }
            >
              <List.Item.Meta
                title={<h2>{`[${type.toUpperCase()}] ${title}`}</h2>}
                description={<span className="line-two">{description}</span>}
              />
            </List.Item>
          );
        }}
      />
    </StyledMobileMainLists>
  );
};
