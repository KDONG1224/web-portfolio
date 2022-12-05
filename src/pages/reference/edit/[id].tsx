// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { ReferenceEdit } from 'container';

// modules
import { ReferApi } from 'modules';

interface ReferenceEditPageProps {
  editData: any;
}

const ReferenceEditPage: React.FC<ReferenceEditPageProps> = ({ editData }) => {
  return (
    <MainLayout>
      <ReferenceEdit editData={editData} />
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
    const filter = {
      _id: id
    };
    const referApi = new ReferApi();
    const getReferenceLists = await referApi.getReferenceLists({ ...filter });

    return {
      props: {
        editData: getReferenceLists[0] || {}
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ReferenceEditPage;
