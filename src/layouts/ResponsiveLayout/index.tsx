// base
import React, { HTMLAttributes } from 'react';

// styled
import {
  StyledPcResponsiveLayout,
  StyledTabletResponsiveLayout,
  StyledMobileResponsiveLayout
} from './style';

// hooks
import { useMedia } from 'hooks';

interface ResponsiveLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  ...props
}) => {
  const { isMobile, isPc, isTablet } = useMedia();
  return (
    <>
      {isPc && (
        <StyledPcResponsiveLayout {...props}>
          {children}
        </StyledPcResponsiveLayout>
      )}
      {isTablet && (
        <StyledTabletResponsiveLayout {...props}>
          {children}
        </StyledTabletResponsiveLayout>
      )}
      {isMobile && (
        <StyledMobileResponsiveLayout {...props}>
          {children}
        </StyledMobileResponsiveLayout>
      )}
    </>
  );
};
