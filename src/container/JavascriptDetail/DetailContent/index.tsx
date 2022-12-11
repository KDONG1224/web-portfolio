import { javascriptReferV1 } from 'consts';
import { useScrollToNode } from 'hooks';
import React, { useCallback, useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import { StyledDetailContent } from './style';

export const DetailContent = () => {
  return (
    <StyledDetailContent>
      <div className="content-wrapper">
        {javascriptReferV1.map((refer: any, idx: number) => (
          <div id={`sample${refer.key}`} className="sample" key={idx}>
            <h2>
              {`${refer.key}. ${refer.name}`}
              <span className="dot"></span>
            </h2>
            <div className="code">
              <Highlight>{refer.codeView || ''}</Highlight>
            </div>
            <div className="result">
              <h3>
                <a href="#">결과보기</a>
              </h3>
              <div className="show">
                {refer.result?.map((desc: string, num: number) => (
                  <React.Fragment key={num}>
                    <span className={`result${idx}-${num}`}>{desc}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledDetailContent>
  );
};
