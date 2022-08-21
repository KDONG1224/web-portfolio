// base
import React from 'react';

// style
import { StyledMainCardItem } from './style';

interface MainCardItemProps {
  url: string;
  title: string;
  desc: string;
}

export const MainCardItem: React.FC<MainCardItemProps> = ({
  url,
  title,
  desc
}) => {
  return (
    <StyledMainCardItem>
      <div className='card-wrapper'>
        <div className='card-wrapper-top'>
          <img src={url} alt={title} />
          <span className='card-wrapper-top-hover'>
            <strong>{title}</strong>
            <span>자세히 보기</span>
          </span>
        </div>
        <div className='card-wrapper-bottom'>
          <div className='card-wrapper-bottom-title'>{title}</div>
          <div className='card-wrapper-bottom-desc'>{desc}</div>
        </div>
      </div>
    </StyledMainCardItem>
  );
};
