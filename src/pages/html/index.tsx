// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { Html } from 'container';
import { ReferApi } from 'modules/reference';

interface HtmlPageProps {
  referLists: any;
}

const HtmlPage: React.FC<HtmlPageProps> = ({ referLists }) => {
  console.log('=========================');
  console.log('referLists : ', referLists);
  console.log('=========================');

  return (
    <MainLayout>
      <Html />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const referApi = new ReferApi();
    const referLists = await referApi.getReferenceLists();

    return {
      props: {
        referLists
      }
    };
  } catch (error) {
    console.log('error : ', error);

    return {
      notFound: true
    };
  }
};

export default HtmlPage;
