// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMobileFooter } from './style';

// libraries
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { TabBar } from 'antd-mobile';

interface MobileFooterProps {}

export const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
  const router = useRouter();
  const pathname = router.pathname;

  const setRouteActive = (value: string) => {
    console.log('value : ', value);
    // router.push(value)
  };

  const tabs = [
    {
      key: '/home',
      title: '홈',
      icon: <CheckCircleOutlined />
    },
    {
      key: '/todo',
      title: '동재',
      icon: <QuestionCircleOutlined />
    },
    {
      key: '/message',
      title: '코딩',
      icon: <PlusCircleOutlined />
    },
    {
      key: '/me',
      title: '프론트',
      icon: <ExclamationCircleOutlined />
    }
  ];

  return (
    <StyledMobileFooter>
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </StyledMobileFooter>
  );
};
