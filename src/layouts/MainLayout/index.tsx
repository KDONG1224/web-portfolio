// base
import React, { HTMLAttributes, useState } from 'react';


// style
import { StyledMainLayout } from './style';

// library
import { Col, Layout, Row } from 'antd';

// containers
import { MainMenu } from 'container';

// modules
import { sideMenuCollapsedAction, touchSideMenuCollapsed } from 'modules/ui';
import { useAppDispatch, useAppSelector } from 'modules/hooks';

const { Content, Sider } = Layout;

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  const handleToggle = () => {
     dispatch(sideMenuCollapsedAction(!isSideMenuCollapsed));
     dispatch(touchSideMenuCollapsed(true));    
     setCollapsed(!collapsed)
  };

  console.log('isSideMenuCollapsed : ', isSideMenuCollapsed);
  console.log('collapsed : ', collapsed);

  return (
    <StyledMainLayout>
      <Layout>
        <Layout>
          <Sider
            className={`side-layout-background ${
              collapsed ? 'side_collapsed' : ''
            }`}
            trigger={null}
            width={'15rem'}
            collapsible
            collapsedWidth={'5rem'}
            collapsed={collapsed}
            style={{ position: 'relative' }}
          >
            <Row gutter={24} className="layout-sider-row">
              <Col span={24} className="layout-sider-col">
                <div className="layout-sider-thumb">
                  <div
                    className={`layout-sider-thumb-box ${
                      collapsed ? 'active' : ''
                    }`}
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/87642774?v=4"
                      alt="kdong"
                    />
                  </div>
                  <h3
                    className={`layout-sider-title ${
                      collapsed ? 'active' : ''
                    }`}
                  >
                    밥값하는 개발자 강동재
                  </h3>
                </div>
                <MainMenu collapsed={collapsed} />
              </Col>
            </Row>

            <div
              style={{
                width: '2rem',
                height: '100%',
                position: 'fixed',
                left: collapsed ? '4.8rem' : '14.8rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#F2F3F6'
              }}
            >
              <div className="navi-toggle" onClick={handleToggle} />
            </div>
          </Sider>

          <Layout
            style={{
              height: '100vh',
              overflowY: 'scroll'
            }}
          >
            <Content
              style={{
                marginLeft: '2rem',
                padding: '36px'
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </StyledMainLayout>
  );
};
