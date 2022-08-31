// base
import React, { HTMLAttributes } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// style
import { StyledMainLayout } from './style';

// library
import { Col, Layout, Row } from 'antd';

// containers
import { MainMenu } from 'container';

// modules
import { StoreState } from 'modules';
import { sideMenuCollapsedAction, touchSideMenuCollapsed } from 'modules/ui';

const { Content, Sider } = Layout;

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const { isSideMenuCollapsed } = useSelector((state: StoreState) => state.ui);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(sideMenuCollapsedAction(!isSideMenuCollapsed));
    dispatch(touchSideMenuCollapsed(true));
  };

  return (
    <StyledMainLayout>
      <Layout>
        <Layout>
          <Sider
            className={`side-layout-background ${
              isSideMenuCollapsed ? 'side_collapsed' : ''
            }`}
            trigger={null}
            width={'15rem'}
            collapsible
            collapsedWidth={'5rem'}
            collapsed={isSideMenuCollapsed}
            style={{ position: 'relative' }}
          >
            <Row gutter={24} className="layout-sider-row">
              <Col span={24} className="layout-sider-col">
                <div className="layout-sider-thumb">
                  <div
                    className={`layout-sider-thumb-box ${
                      isSideMenuCollapsed ? 'active' : ''
                    }`}
                  >
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
                    밥값하는 개발자 강동재
                  </h3>
                </div>
                <MainMenu collapsed={isSideMenuCollapsed} />
              </Col>
            </Row>

            <div
              style={{
                width: '2rem',
                height: '100%',
                position: 'fixed',
                left: isSideMenuCollapsed ? '4.8rem' : '14.8rem',
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
