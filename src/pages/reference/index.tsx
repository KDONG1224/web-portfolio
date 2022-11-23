// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { Reference } from 'container';

interface ReferencePageProps {}

const ReferencePage: React.FC<ReferencePageProps> = ({}) => {
  return (
    <MainLayout>
      <Reference />
    </MainLayout>
  );
};

export default ReferencePage;
