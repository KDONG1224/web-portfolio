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
import { useRouter } from 'next/router';
import { useMedia } from 'hooks';

interface BasicCardProps {
  data: any;
  width?: number;
  heigth?: number;
  onClick?: (id: string) => void;
}

export const BasicCard: React.FC<BasicCardProps> = ({
  data,
  width = 400,
  heigth = 200,
  onClick
}) => {
  const router = useRouter();
  const { isMobile } = useMedia();

  const { id, type, title, summary, question, createdAt, thumbmnaile } = data;

  const handleClick = () => {
    if (onClick) {
      onClick(id);
      return;
    }

    router.push(ROUTE_REFERNCE_DETAIL_WITH_ID(id));
  };

  return (
    <StyledBasicCard>
      <div className="algo-wrapper">
        <div className="algo-wrapper-top">
          <BlurImage
            src={thumbmnaile}
            alt={title}
            width={width}
            height={heigth}
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="algo-wrapper-bottom">
          <div className="algo-wrapper-bottom-date">
            <span className="algo-wrapper-bottom-date-tag">
              <Tag color="red">{type.toLocaleUpperCase()}</Tag>
            </span>
            {!isMobile && (
              <span className="algo-wrapper-bottom-date-text">
                {moment(createdAt).format('YYYY-MM-DD, HH:mm')}
              </span>
            )}
          </div>
          <div className="algo-wrapper-bottom-title line-two">{title}</div>
          {isMobile && (
            <div className="algo-wrapper-bottom-date">
              {moment(createdAt).format('YYYY-MM-DD, HH:mm')}
            </div>
          )}
          <div className="algo-wrapper-bottom-desc line-two">
            <span className="line-two">{summary || question}</span>
          </div>
          <div className="algo-wrapper-bottom-move" onClick={handleClick}>
            READ MORE
          </div>
        </div>
      </div>
    </StyledBasicCard>
  );
};
