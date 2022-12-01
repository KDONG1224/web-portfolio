// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';
import { GetServerSideProps } from 'next';
import { ReferApi } from 'modules';
import { ReferenceDetail } from 'container';

interface ReferenceDetailPageProps {
  reference: any;
}

const ReferenceDetailPage: React.FC<ReferenceDetailPageProps> = ({
  reference
}) => {
  return (
    <MainLayout>
      <ReferenceDetail data={reference} />
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
    const getReferenceLists = await referApi.getReferenceLists({ _id: id });

    return {
      props: {
        reference: getReferenceLists[0]
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
