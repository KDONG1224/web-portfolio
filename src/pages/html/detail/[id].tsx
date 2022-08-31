// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { HtmlDetails } from 'container';
import { ReferApi } from 'modules/reference';

interface HtmlDetailPageProps {
  id: string;
  referLists: any;
}

const HtmlDetailPage: React.FC<HtmlDetailPageProps> = ({ id, referLists }) => {
  console.log('referLists : ', referLists);
  return (
    <MainLayout>
      <HtmlDetails id={id} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (!id || typeof id !== 'string') {
    return {
      notFound: true
    };
  }
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

export default HtmlDetailPage;
