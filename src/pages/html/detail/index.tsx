// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { HtmlDetails } from 'container';

// modules
import { ReferApi } from 'modules/reference';

interface HtmlDetailPageProps {}

const HtmlDetailPage: React.FC<HtmlDetailPageProps> = ({}) => {
  return (
    <MainLayout>
      <HtmlDetails />
    </MainLayout>
  );
};

export default HtmlDetailPage;
