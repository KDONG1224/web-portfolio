// base
import React from 'react';
import { useRouteMatch } from 'react-router';

// layouts
import { MainLayout } from 'layouts';
import { AlgorithmDetails } from 'container';

const AlgorithmDetailePage = () => {
  const match = useRouteMatch<{ id: string }>();

  const id = match.params.id;

  return (
    <MainLayout>
      <AlgorithmDetails id={id} />
    </MainLayout>
  );
};

export default AlgorithmDetailePage;
