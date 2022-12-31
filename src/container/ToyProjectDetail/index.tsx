// base
import { Button } from 'antd';
import { BlurImage } from 'components';
import React from 'react';

// style
import { StyledToyProjectDetail } from './style';

interface ToyProjectDetailProps {
  data: any;
}

export const ToyProjectDetail: React.FC<ToyProjectDetailProps> = ({ data }) => {
  const { id, information, korName } = data;

  return (
    <StyledToyProjectDetail>
      <div className="detail-wrapper">
        <div className="detail-wrapper-button">
          <Button disabled>게임시작 (개발중...)</Button>
        </div>
        <BlurImage src={information} alt={korName} width={886} height={10000} />
      </div>
    </StyledToyProjectDetail>
  );
};
