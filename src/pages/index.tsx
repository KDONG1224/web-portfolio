// base
import type { NextPage } from 'next';

// libraries
import { Row, Col } from 'antd';

// layouts

import { MainBanner, MainBoard, MainCard } from 'container';
import { MainLayout } from 'layouts';
import { DefaulLayout } from 'layouts/DefaulLayout';
import { BasicCard } from 'components';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const array = [...Array(20)].map((dummy, idx) => {
    return {
      id: idx + 1,
      title: 'card ' + (idx + 1),
      summary: 'test code'
    };
  });

  return (
    // <MainLayout>
    //   <StyledHomePage>
    //     <MainBanner />
    //     <MainCard />
    //   </StyledHomePage>
    // </MainLayout>
    <DefaulLayout>
      <Row gutter={24}>
        <Col span={16}>
          <div
            style={{
              height: 'calc(100vh - 80px)',
              overflowY: 'scroll'
            }}
          >
            <MainBanner />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {array.map(({ id }) => (
                <Col
                  className="gutter-row"
                  span={8}
                  key={id}
                  style={{ marginBottom: 60 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BasicCard id={String(id)} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col
          span={8}
          style={{
            paddingRight: 20
          }}
        >
          <MainBoard />
        </Col>
      </Row>
    </DefaulLayout>
  );
};

export default HomePage;
