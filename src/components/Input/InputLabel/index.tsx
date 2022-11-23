// base
import React from 'react';

// style
import { StyledInputLabel } from './style';

interface InputLabelProps {
  text: string;
  require?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({ text, require }) => (
  <StyledInputLabel style={{ minWidth: '100px' }}>
    {text} {require && <span style={{ color: '#FF6712' }}>*</span>}
  </StyledInputLabel>
);
