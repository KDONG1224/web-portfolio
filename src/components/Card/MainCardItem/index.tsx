// base
import React from 'react';

// style
import { StyledMainCardItem } from './style';

// hooks
import { useMedia } from 'hooks';

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
  const { isMobile } = useMedia();

  return (
    <StyledMainCardItem ismobile={isMobile ? 'true' : 'false'}>
      <div className="card-wrapper">
        <div className="card-wrapper-top">
          <img src={url} alt={title} />
          {!isMobile && (
            <span className="card-wrapper-top-hover">
              <strong>{title}</strong>
              <span>자세히 보기</span>
            </span>
          )}
        </div>
        <div className="card-wrapper-bottom">
          <div className="card-wrapper-bottom-title">{title}</div>
          <div className="card-wrapper-bottom-desc">
            {isMobile ? '자세히 보기' : desc}
          </div>
        </div>
      </div>
    </StyledMainCardItem>
  );
};
