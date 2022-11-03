// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { AlgorithmDetails } from 'container';

const AlgorithmDetailPage = () => {
  return (
    <MainLayout>
      <AlgorithmDetails />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { key } = context.query;

  if (!key || typeof key !== 'string') {
    return {
      notFound: true
    };
  }

  try {
    return {
      props: {}
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};

export default AlgorithmDetailPage;
