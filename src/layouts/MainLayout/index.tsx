// base
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMainLayout, StyledMobileLayout } from './style';

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

// hooks
import { useMedia, useScroll } from 'hooks';

// components
import { MobileFooter, MobileHeader } from 'components';

const { Header, Content, Footer, Sider } = Layout;

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const [_, setCollapsed] = useState(false);

  /*
    메인메뉴 사이더 관련
  */
  const [openKeys, setOpenkeys] = useState<string[] | undefined>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [activeKey, setActiveKey] = useState<string>('');

  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const router = useRouter();
  const pathname = router.pathname;
  const isRoot = pathname === ROUTE_ROOT;
  const dispatch = useAppDispatch();

  const { isMobile, isPc, isTablet } = useMedia();
  const { scrollY } = useScroll();

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

  const onOpenChange = (openKeys: string[]) => {
    setOpenkeys(openKeys as string[]);
  };

  const onClick = (key: string) => {
    const url = key as unknown as URL;
    router.push(url);
  };

  const onClickSocial = (type: string) => {
    if (type === 'api')
      return window.open('https://kdong-server.herokuapp.com/api/v1/kdong');
    if (type === 'github') return window.open('https://github.com/KDONG1224');
    if (type === 'tistory')
      return window.open('https://kdong1224.tistory.com/');
    if (type === 'instagram')
      return window.open('https://www.instagram.com/noyclah_jdk/');
  };

  const handleOpen = () => {
    const openKey = pathname.split(/(?=\/)/g)[0];

    setActiveKey(openKey);
    setOpenkeys(isSideMenuCollapsed ? undefined : [openKey]);
    setSelectedKeys([pathname]);
  };

  useEffect(() => {
    handleOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isSideMenuCollapsed]);

  return (
    <StyledMainLayout>
      {(isPc || isTablet) && (
        <Layout {...props}>
          <Sider
            collapsible
            collapsed={isSideMenuCollapsed}
            onCollapse={(value) => onCollapse(value)}
            style={{
              height: '100vh',
              overflowY: 'scroll'
            }}
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
          <Layout
            className="site-layout"
            style={{
              height: '100vh',
              overflowY: 'scroll'
            }}
          >
            <Header className="site-layout-header" style={{ padding: 0 }}>
              <div className="header-wrapper">
                <div
                  className="header-wrapper-text"
                  style={isTablet ? { display: 'none' } : { display: 'block' }}
                >
                  <span>
                    밥 ----- 값하는 개발자 강동재의 포트폴리오에 오신걸
                    환영합니다.
                  </span>
                  <span
                    style={{
                      marginLeft: '30px'
                    }}
                  >{`지금 PC버전: ${isPc} / 태블릿버전: ${isTablet} / 모바일버젼: ${isMobile}`}</span>
                </div>
                <div className="header-wrapper-social">
                  <span onClick={() => onClickSocial('api')}>
                    <img src={socialIcons.API_ICON} alt="api" />
                  </span>
                  <span onClick={() => onClickSocial('github')}>
                    <img src={socialIcons.GITHUB_ICON} alt="깃허브" />
                  </span>
                  <span onClick={() => onClickSocial('tistory')}>
                    <img src={socialIcons.TISTORY_ICON} alt="티스토리" />
                  </span>
                  <span onClick={() => onClickSocial('instagram')}>
                    <img src={socialIcons.INSTAGRAM_ICON} alt="인스타그램" />
                  </span>
                </div>
              </div>
            </Header>
            <Content
              style={{
                marginLeft: '2rem',
                paddingTop: '36px',
                paddingRight: '36px'
              }}
            >
              {children}
            </Content>
            <Footer style={{ textAlign: 'center', background: '#fff' }}>
              KDONG Portfolio ©2022 Created by KDONG
            </Footer>
          </Layout>
        </Layout>
      )}
      {isMobile && (
        <StyledMobileLayout
          isMobile={isMobile}
          isRoot={isRoot}
          isHide={isRoot && scrollY < 200 ? true : false}
        >
          <Layout>
            <Header
              className={`mobile-layout-header ${
                isRoot && scrollY < 200 && 'hide'
              }`}
            >
              <MobileHeader />
            </Header>
            <Content style={{ background: '#ddd' }}>{children}</Content>
            <Footer>
              <MobileFooter />
            </Footer>
          </Layout>
        </StyledMobileLayout>
      )}
    </StyledMainLayout>
  );
};
