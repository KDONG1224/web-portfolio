// base
import { exImg } from 'const';
import React from 'react';

// style
import { StyledCommonCard } from './style';

interface CommonCardProps {
  id: string;
  url: string;
  title: string;
  onClick: (id: string) => void;
}

export const CommonCard: React.FC<CommonCardProps> = ({
  id,
  url,
  title,
  onClick
}) => {
  const onClickCard = () => {
    onClick(id);
  };

  return (
    <StyledCommonCard onClick={onClickCard}>
      <div className='card-wrapper'>
        <div className='card-wrapper-top'>
          <img src={url || exImg.EX_NUM_03} alt={title || '백준 알고리즘'} />
          <span className='card-wrapper-top-desc'>
            <strong>{title || '백준 알고리즘'}</strong>
            <span>자세히 보기</span>
          </span>
        </div>
      </div>
    </StyledCommonCard>
  );
};
