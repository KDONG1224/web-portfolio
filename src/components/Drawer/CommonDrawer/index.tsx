// base
import React, { ReactNode } from 'react';

// styled
import { StyledCommonDrawer } from './style';

// antd
import { DrawerProps } from 'antd';

interface CommonDrawerProps extends DrawerProps {
  children: ReactNode;
  headerTitle?: string;
}

export const CommonDrawer: React.FC<CommonDrawerProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledCommonDrawer {...props}>
      <div className="drawer-wrapper">
        <div className="drawer-wrapper-contents">{children}</div>
      </div>
    </StyledCommonDrawer>
  );
};
