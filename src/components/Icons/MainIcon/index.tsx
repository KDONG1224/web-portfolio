// base
import React from 'react';

// style
import { StyledMainIcon } from './style';

interface MainIconProps {
  className: string;
}

export const MainIcon: React.FC<MainIconProps> = ({ className }) => {
  return (
    <StyledMainIcon>
      <div className={`${className} navi-icon`} />
    </StyledMainIcon>
  );
};
