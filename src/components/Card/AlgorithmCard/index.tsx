// base
import { Tag } from 'antd';
import { exImg } from 'const';
import { ROUTE_ALGORITHM_DETAIL_WITH_ID } from 'const/route';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// style
import { StyledAlgorithmCard } from './style';

interface AlgorithmCardProps {
  id: string;
}

export const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ id }) => {
  const tagName = 'Programmers' || 'No TagName';

  return (
    <StyledAlgorithmCard>
      <div className="algo-wrapper">
        <div className="algo-wrapper-top">
          <Image
            src={exImg.EX_NUM_05}
            alt=""
            width={350}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className="algo-wrapper-bottom">
          <div className="algo-wrapper-bottom-date">
            <span className="algo-wrapper-bottom-date-tag">
              <Tag color="red">{tagName.toLocaleUpperCase()}</Tag>
            </span>
            <span className="algo-wrapper-bottom-date-text">
              {/* Friday 13 August */}
              2022-11-05, PM 12:00
            </span>
          </div>
          <div className="algo-wrapper-bottom-title line-two">
            How To Choose Best Bike For Spring In Bangladesh?
          </div>
          <div className="algo-wrapper-bottom-desc line-two">
            <span className="line-two">
              If you ever wish to buy a motorcycle for you than you must think a
              lot before buying...
            </span>
          </div>
          <div className="algo-wrapper-bottom-move">
            <Link href={ROUTE_ALGORITHM_DETAIL_WITH_ID(id)}>READ MORE</Link>
          </div>
        </div>
      </div>
    </StyledAlgorithmCard>
  );
};
