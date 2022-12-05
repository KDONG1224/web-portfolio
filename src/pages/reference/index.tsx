// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { ReferenceLists } from 'container';
import { GetServerSideProps } from 'next';
import { ReferApi } from 'modules';

interface ReferencePageProps {
  referenceLists: any;
}

const ReferencePage: React.FC<ReferencePageProps> = ({ referenceLists }) => {
  return (
    <MainLayout>
      <ReferenceLists referenceLists={referenceLists} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const referApi = new ReferApi();
    const allReferenceLists = await referApi.getAllReference();

    return {
      props: {
        referenceLists: allReferenceLists
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default ReferencePage;
