// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { AlcholCupGame } from 'container';

// modules
import { ReferApi } from 'modules';

const WorldCupGamePage = () => {
  return (
    <MainLayout>
      <AlcholCupGame />
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

export default WorldCupGamePage;
