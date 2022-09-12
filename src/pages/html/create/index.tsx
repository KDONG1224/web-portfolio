// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// containers
import { HtmlCreate } from 'container'

interface HtmlCreatePageProps {}

const HtmlCreatePage:React.FC<HtmlCreatePageProps> = ({}) => {
  return (
    <MainLayout>
      <HtmlCreate />
    </MainLayout>
  );
};

export default HtmlCreatePage;