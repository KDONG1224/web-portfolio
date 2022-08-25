// base
import React from 'react';
import { useRouteMatch } from 'react-router';

// layouts
import { MainLayout } from 'layouts';
import { AlcholCupGame } from 'container';

const AlcholCupDetailePage = () => {
  const match = useRouteMatch<{ id: string }>();

  const id = match.params.id;

  return (
    <MainLayout>
      <AlcholCupGame />
    </MainLayout>
  );
};

export default AlcholCupDetailePage;
