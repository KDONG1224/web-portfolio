// base
import React from 'react';
import { useRouter } from 'next/router';

// libaries
import { Col, Row } from 'antd';

// style
import { StyledAlcholCup } from './style';

// const
import { alcholcupData, exImg } from 'consts';

// components
import { WordCupList } from 'components';
import { ROUTE_ALCHOL_CUP_DETAIL_WITH_ID } from 'consts/route';

export const AlcholCup = () => {
  const router = useRouter();
  const onClick = (id: number) => {
    console.log('onClick : ', id);
    const select = String(id);
    return router.push(ROUTE_ALCHOL_CUP_DETAIL_WITH_ID(select));
  };
  return (
    <StyledAlcholCup>
      <div className="alchol-title">
        <p className="alchol-title-head">이상형 월드컵</p>
        <p className="alchol-title-desc">다양한 이상형 월드컵을 즐겨봐요.</p>
      </div>

      <Row justify="space-between" gutter={[16, 80]}>
        {alcholcupData.map((el) => (
          <Col span={6} key={el.id} onClick={() => onClick(el.id)}>
            <WordCupList src={el.img} title={el.name} />
          </Col>
        ))}
      </Row>
    </StyledAlcholCup>
  );
};
