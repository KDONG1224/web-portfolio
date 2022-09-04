// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
// import { CssDetails } from 'container';
import { ReferApi } from 'modules/reference';

interface CssDetailPageProps {
  id: string;
  referLists: any;
}

const CssDetailPage: React.FC<CssDetailPageProps> = ({ id, referLists }) => {
  console.log('referLists : ', referLists);
  return (
    <MainLayout>
      {/* <CssDetails id={id} /> */}
      <div>안녕 나는 css 페이지</div>
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

export default CssDetailPage;
