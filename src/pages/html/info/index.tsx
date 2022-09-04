// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { Html } from 'container';

interface HtmlInfoPageProps {}

const HtmlInfoPage: React.FC<HtmlInfoPageProps> = ({}) => {
  return (
    <MainLayout>
      <Html />
    </MainLayout>
  );
};

export default HtmlInfoPage;
