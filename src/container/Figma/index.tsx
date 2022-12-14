// base
import { FIGMA_LISTS } from 'consts';
import React from 'react';
import Embed from 'react-embed';

// style
import { StyledFigma } from './style';

export const Figma = () => {
  const handleOpen = (url: string) => {
    window.open(url);
  };

  return (
    <StyledFigma>
      <div className="figma-wrapper">
        <div className="figma-wrapper-title">
          피그마로 제작한 레퍼런스 북 입니다.
        </div>

        <div className="figma-wrapper-body">
          {FIGMA_LISTS.map(({ key, title, embedLink, url }) => (
            <div
              key={key}
              className="figma-wrapper-body-embed"
              onClick={() => handleOpen(url)}
            >
              <h2>{title}</h2>
              {embedLink !== '' && <Embed url={embedLink} />}
            </div>
          ))}
        </div>
      </div>
    </StyledFigma>
  );
};
