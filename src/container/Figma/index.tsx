// base
import React from 'react';
import Embed from 'react-embed';

// style
import { StyledFigma } from './style';

export const Figma = () => {
  return (
    <StyledFigma>
      <div>figma page</div>
      <Embed url="https://www.figma.com/file/OObYKiYoLf1ZsA0oB2g1jS/KDONG's-Reference-Book?node-id=1%3A8" />
    </StyledFigma>
  );
};
