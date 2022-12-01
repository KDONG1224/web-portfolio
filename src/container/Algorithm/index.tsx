// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithm } from './style';

// library
import { Col, Row } from 'antd';

// modules

// components
import { AlgorithmCard, CommonCard } from 'components';

// const
import { algorithmInfo } from 'consts';
import { useAppSelector } from 'modules/hooks';

import { ROUTE_ALGORITHM_DETAIL_WITH_ID } from 'consts/route';

// routes

export const Algorithm: React.FC = () => {
  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const router = useRouter();

  const onClick = (id: string) => {
    const key = id.split('-')[1];

    router.push(ROUTE_ALGORITHM_DETAIL_WITH_ID(key));
  };

  return (
    <StyledAlgorithm>
      <div className="algo-title">
        <p className="algo-title-head">알고리즘 사이트</p>
        <p className="algo-title-desc">알고리즘을 직접 풀어봤습니다.</p>
      </div>
      {/* <div className='algo-box'>
        <span>리스트</span>
        <span>카드</span>
      </div> */}

      <Row
        justify="space-between"
        // gutter={isSideMenuCollapsed ? [112, 80] : [10, 80]}
        gutter={[30, 80]}
        // style={{
        //   width: '100%',
        //   marginLeft: '0px',
        //   marginRight: '-84px',
        //   rowGap: '84px'
        // }}
      >
        {algorithmInfo.map((algorithm) => (
          <Col
            span={6}
            key={algorithm.key}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* <CommonCard
              id={algorithm.key}
              title={algorithm.title}
              url={algorithm.url}
              onClick={onClick}
            /> */}
            <AlgorithmCard id={algorithm.key} />
          </Col>
        ))}
      </Row>
    </StyledAlgorithm>
  );
};
