// base
import React, { HTMLAttributes, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMainLayout } from './style';

// libraries
import { Layout, Menu } from 'antd';

// utils
import { getMenuItem, MenuItem } from 'utils';
import { MenuInfo } from 'rc-menu/lib/interface';

// route
import {
  ROUTE_ROOT,
  ROUTE_ABOUT,
  ROUTE_HTML,
  ROUTE_HTML_INFO,
  ROUTE_CSS,
  ROUTE_JS,
  ROUTE_ALGORITHM,
  ROUTE_FIGMA,
  ROUTE_NOTION,
  ROUTE_ALCHOL_CUP
} from 'const/route';

// modules
import { useAppDispatch, useAppSelector } from 'modules/hooks';
import { sideMenuCollapsedAction, touchSideMenuCollapsed } from 'modules';

const { Header, Content, Footer, Sider } = Layout;

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const items: MenuItem[] = [
    getMenuItem('홈', ROUTE_ROOT, <div className="home-icon navi-icon" />),
    getMenuItem(
      '어바웃',
      ROUTE_ABOUT,
      <div className="about-icon navi-icon" />
    ),
    getMenuItem('HTML', 'html', <div className="html-icon navi-icon" />, [
      getMenuItem('HTML 설명', ROUTE_HTML)
    ]),
    getMenuItem('CSS', ROUTE_CSS, <div className="css-icon navi-icon" />),
    getMenuItem(
      '자바스크립트',
      ROUTE_JS,
      <div className="javascript-icon navi-icon" />
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
      '알콜컵',
      ROUTE_ALCHOL_CUP,
      <div className="alchol-icon navi-icon" />
    )
  ];

  const onCollapse = (value: boolean) => {
    dispatch(sideMenuCollapsedAction(!isSideMenuCollapsed));
    dispatch(touchSideMenuCollapsed(value));
    setCollapsed(value);
  };

  const onClick = (key: string) => {
    console.log('클릭! : ', key);
    const url = key as unknown as URL;
    router.push(url);
  };

  return (
    <StyledMainLayout>
      <Layout {...props}>
        <Sider
          collapsible
          collapsed={isSideMenuCollapsed}
          onCollapse={(value) => onCollapse(value)}
        >
          <div className="layout-sider-thumb">
            <div className={`layout-sider-thumb-box`}>
              <img
                src="https://avatars.githubusercontent.com/u/87642774?v=4"
                alt="kdong"
              />
            </div>
            <h3
              className={`layout-sider-title ${
                isSideMenuCollapsed ? 'active' : ''
              }`}
            >
              {isSideMenuCollapsed ? '강동재' : '밥값하는 개발자 강동재'}
            </h3>
          </div>
          <Menu
            defaultSelectedKeys={['home']}
            mode="inline"
            items={items}
            onClick={({ key }) => onClick(key)}
          />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            height: '100vh',
            overflowY: 'scroll'
          }}
        >
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div
              style={{
                marginLeft: '36px'
              }}
            >
              밥 ----- 값하는 개발자 강동재의 포트폴리오에 오신걸 환영합니다.
            </div>
          </Header>
          <Content
            style={{
              marginLeft: '2rem',
              paddingTop: '36px',
              paddingRight: '36px'
            }}
          >
            {/* <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            > */}
            {children}
            {/* </div> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            KDONG Portfolio ©2022 Created by KDONG
          </Footer>
        </Layout>
      </Layout>
    </StyledMainLayout>
  );
};
