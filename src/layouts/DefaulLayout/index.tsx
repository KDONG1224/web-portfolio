// base
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledDefaultLayout } from './style';

// libraries
import { Layout, Menu } from 'antd';

// utils
import { getMenuItem, MenuItem } from 'utils';

// route
import {
  ROUTE_ROOT,
  ROUTE_ABOUT,
  ROUTE_HTML,
  ROUTE_CSS,
  ROUTE_JS,
  ROUTE_ALGORITHM,
  ROUTE_FIGMA,
  ROUTE_NOTION,
  ROUTE_ALCHOL_CUP
} from 'const/route';
import { socialIcons } from 'const';

// modules
import { useAppDispatch, useAppSelector } from 'modules/hooks';
import { sideMenuCollapsedAction, touchSideMenuCollapsed } from 'modules';
import { MainHeader } from 'components';

const { Content, Sider } = Layout;

interface DefaulLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const DefaulLayout: React.FC<DefaulLayoutProps> = ({
  children,
  ...props
}) => {
  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const [_, setCollapsed] = useState(false);
  const [openKeys, setOpenkeys] = useState<string[] | undefined>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [activeKey, setActiveKey] = useState<string>('');

  const router = useRouter();
  const pathname = router.pathname;
  const dispatch = useAppDispatch();

  const onCollapse = (value: boolean) => {
    dispatch(sideMenuCollapsedAction(!isSideMenuCollapsed));
    dispatch(touchSideMenuCollapsed(value));
    setCollapsed(value);
  };

  const handleOpen = () => {
    const openKey = pathname.split(/(?=\/)/g)[0];

    setActiveKey(openKey);
    setOpenkeys(isSideMenuCollapsed ? undefined : [openKey]);
    setSelectedKeys([pathname]);
  };

  const onOpenChange = (openKeys: string[]) => {
    setOpenkeys(openKeys as string[]);
  };

  const onClick = (key: string) => {
    const url = key as unknown as URL;
    router.push(url);
  };

  const items: MenuItem[] = [
    getMenuItem('홈', ROUTE_ROOT, <div className="home-icon navi-icon" />),
    getMenuItem(
      '어바웃',
      ROUTE_ABOUT,
      <div className="about-icon navi-icon" />
    ),
    getMenuItem(
      '레퍼런스',
      'reference',
      <div className="html-icon navi-icon" />,
      [
        getMenuItem(
          'HTML 설명',
          ROUTE_HTML,
          <div className="html-icon navi-icon" />
        ),
        getMenuItem(
          'CSS 설명',
          ROUTE_CSS,
          <div className="css-icon navi-icon" />
        ),
        getMenuItem(
          'JS 설명',
          ROUTE_JS,
          <div className="javascript-icon navi-icon" />
        )
      ]
    ),
    getMenuItem(
      '알고리즘',
      ROUTE_ALGORITHM,
      <div className="algorithm-icon navi-icon" />
    ),
    getMenuItem(
      '피그마',
      ROUTE_FIGMA,
      <div className="figma-icon navi-icon" />
    ),
    getMenuItem(
      '노션',
      ROUTE_NOTION,
      <div className="notion-icon navi-icon" />
    ),
    getMenuItem(
      '토이프로젝트',
      ROUTE_ALCHOL_CUP,
      <div className="alchol-icon navi-icon" />
    )
  ];

  useEffect(() => {
    handleOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isSideMenuCollapsed]);

  return (
    <StyledDefaultLayout>
      <Layout {...props}>
        <MainHeader />
        <Sider
          collapsible
          collapsed={isSideMenuCollapsed}
          onCollapse={(value) => onCollapse(value)}
          // style={{
          //   height: '100vh',
          //   overflowY: 'scroll'
          // }}
        >
          <Menu
            mode="inline"
            items={items}
            onClick={({ key }) => onClick(key)}
            onOpenChange={(openKeys) => onOpenChange(openKeys)}
            activeKey={activeKey}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={['home']}
          />
        </Sider>
        <Layout.Content
          className="site-layout"
          style={{
            marginLeft: '2rem',
            paddingTop: '36px',
            paddingRight: '36px',
            height: 'calc(100vh - 30px)',
            overflowY: 'hidden',
            borderRadius: '20px'
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </StyledDefaultLayout>
  );
};
