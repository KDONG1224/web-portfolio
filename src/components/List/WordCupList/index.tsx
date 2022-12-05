// base
import { exImg } from 'consts';
import React from 'react';
import { StyledWordCupList } from './style';

interface WordCupListProps {
  src: string;
  title: string;
}

export const WordCupList: React.FC<WordCupListProps> = ({ src, title }) => {
  return (
    <StyledWordCupList className="alchol-body">
      <div className="alchol-body-top">
        <img src={src || exImg.EX_NUM_05} alt={`${title} 이미지`} />
      </div>
      <div className="alchol-body-bottom">
        <p>{title || '알콜컵1'}</p>
      </div>
    </StyledWordCupList>
  );
};
