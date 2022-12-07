// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { AlgorithmCreate, AlgorithmEdit } from 'container';

const AlgorithmEditPage = () => {
  return (
    <MainLayout>
      {/* <AlgorithmEdit /> */}
      <AlgorithmCreate />
    </MainLayout>
  );
};

export default AlgorithmEditPage;
