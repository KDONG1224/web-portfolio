// base
import { javascriptReferV1 } from 'consts';
import { useScrollToNode } from 'hooks';
import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';

// style
import { StyledDetailMenu } from './style';

interface DetailMenuProps {}

export const DetailMenu: React.FC<DetailMenuProps> = () => {
  const [sample, setSample] = useState('sample01');
  const { scrollTo } = useScrollToNode(sample);

  const handleClick = (name: string) => {
    setSample(name);
  };

  useEffect(() => {
    scrollTo();
  }, [sample, scrollTo]);

  return (
    <StyledDetailMenu>
      <h2 className="mt20">데이터 저장하기</h2>
      <div className="list">
        <ol>
          {javascriptReferV1.map((refer: any, idx: number) => (
            <li key={refer.key} onClick={() => handleClick(refer.href)}>
              <a>{`${idx + 1}. ${refer.name}`}</a>
            </li>
          ))}
        </ol>
      </div>
    </StyledDetailMenu>
  );
};
