// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { Html } from 'container';
import { GetServerSideProps } from 'next';

interface HtmlPageProps {}

const HtmlPage: React.FC<HtmlPageProps> = ({}) => {
  return (
    <MainLayout>
      <Html />
    </MainLayout>
  );
};

export default HtmlPage;
