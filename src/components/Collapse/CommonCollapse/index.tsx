// base
import React from 'react';

// style
import { StyledCommonCollapse } from './style';

// library
import { Collapse, CollapseProps } from 'antd';
import Highlight from 'react-highlight';

interface CommonCollapseProps extends CollapseProps {
  code: string;
  answer: string;
  header?: string;
  onClick?: () => void;
}

export const CommonCollapse: React.FC<CommonCollapseProps> = ({
  code,
  answer,
  header,
  onClick,
  ...rest
}) => {
  const handleAnswer = () => {
    if (!onClick) return;
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledCommonCollapse accordion onChange={handleAnswer} {...rest}>
      <Collapse.Panel key='1' header={header || '정답'}>
        <div className='panel-content'>
          <Highlight className='javascript'>
            <strong>해결방법 : </strong> <br /> {`${code}`}
          </Highlight>
        </div>
        <div className='panel-answer'>
          <Highlight className='javascript'>
            <strong>정답출력 : </strong> <br />
            {`${answer}`}
          </Highlight>
        </div>
      </Collapse.Panel>
    </StyledCommonCollapse>
  );
};
