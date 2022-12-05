// base
import React from 'react';
import Link from 'next/link';
import { Tag } from 'antd';
import { BlurImage } from 'components';
import { exImg } from 'consts';
import {
  ROUTE_ALGORITHM_DETAIL_WITH_ID,
  ROUTE_REFERNCE_DETAIL_WITH_ID
} from 'consts/route';

// style
import { StyledBasicCard } from './style';
import moment from 'moment';

interface BasicCardProps {
  data: any;
}

export const BasicCard: React.FC<BasicCardProps> = ({ data }) => {
  const { id, type, title, summary, updatedAt, thumbmnaile } = data;

  return (
    <StyledBasicCard>
      <div className="algo-wrapper">
        <div className="algo-wrapper-top">
          <BlurImage
            src={thumbmnaile}
            alt=""
            width={400}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className="algo-wrapper-bottom">
          <div className="algo-wrapper-bottom-date">
            <span className="algo-wrapper-bottom-date-tag">
              <Tag color="red">{type.toLocaleUpperCase()}</Tag>
            </span>
            <span className="algo-wrapper-bottom-date-text">
              {moment(updatedAt).format('YYYY-MM-DD, HH-mm')}
            </span>
          </div>
          <div className="algo-wrapper-bottom-title line-two">{title}</div>
          <div className="algo-wrapper-bottom-desc line-two">
            <span className="line-two">{summary}</span>
          </div>
          <div className="algo-wrapper-bottom-move">
            <Link href={ROUTE_REFERNCE_DETAIL_WITH_ID(id)}>READ MORE</Link>
          </div>
        </div>
      </div>
    </StyledBasicCard>
  );
};
