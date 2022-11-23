// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';
import { GetServerSideProps } from 'next';
import { ReferApi } from 'modules';
import { ReferenceDetail } from 'container';

interface ReferenceDetailPageProps {}

const ReferenceDetailPage: React.FC<ReferenceDetailPageProps> = ({}) => {
  return (
    <MainLayout>
      <ReferenceDetail />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  if (!id || typeof id !== 'string') {
    return {
      notFound: true
    };
  }

  try {
    const referApi = new ReferApi();
    // const getReferenceLists = await referApi.getReferenceLists(id);

    return {
      props: {
        referenceLists: []
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ReferenceDetailPage;
