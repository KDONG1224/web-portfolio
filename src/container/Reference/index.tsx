// base
import React from 'react';

// style
import { StyledReference } from './style';

interface ReferenceProps {}

export const Reference: React.FC<ReferenceProps> = ({}) => {
  return (
    <StyledReference>
      <div>Reference Container</div>
    </StyledReference>
  );
};
