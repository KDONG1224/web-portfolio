// base
import React from 'react';

// style
import { StyledReferenceEdit } from './style';

// components
import { ReferenceForm } from 'components';

interface ReferenceEditProps {}

export const ReferenceEdit: React.FC<ReferenceEditProps> = ({}) => {
  return (
    <StyledReferenceEdit>
      <ReferenceForm onSubmit={() => console.log('A')} editing editDatas={[]} />
    </StyledReferenceEdit>
  );
};
