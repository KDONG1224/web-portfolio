// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithm } from './style';

// library
import { Col, Row } from 'antd';

// modules

// components
import { BasicCard, CommonCard } from 'components';

// const
import { algorithmInfo } from 'consts';
import { ROUTE_ALGORITHM_DETAIL_WITH_ID } from 'consts/route';
import { useMedia } from 'hooks';

// routes

interface AlgorithmProps {
  algorithmLists: any[];
}

export const Algorithm: React.FC<AlgorithmProps> = ({ algorithmLists }) => {
  const router = useRouter();
  const { isMobile } = useMedia();

  const handleClick = (id: string) => {
    router.push(ROUTE_ALGORITHM_DETAIL_WITH_ID(id));
  };
  return (
    <StyledAlgorithm isMobile={isMobile}>
      <div className="algo-title">
        <p className="algo-title-head">알고리즘 사이트</p>
        <p className="algo-title-desc">알고리즘을 직접 풀어봤습니다.</p>
      </div>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          marginLeft: isMobile ? 22 : 'auto',
          marginRight: isMobile ? 22 : 'auto',
          paddingBottom: isMobile ? 100 : 0
        }}
      >
        {algorithmLists.map((algorithm) => (
          <Col
            className="gutter-row"
            span={isMobile ? 12 : 8}
            key={algorithm.id}
            style={
              isMobile
                ? {
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginBottom: 60
                  }
                : {
                    marginBottom: 60
                  }
            }
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BasicCard
                data={algorithm.readOnlyData}
                width={isMobile ? 300 : 600}
                heigth={300}
                onClick={handleClick}
              />
            </div>
          </Col>
        ))}
      </Row>
    </StyledAlgorithm>
  );
};
