// base
import React from 'react';
import { GetServerSideProps } from 'next';

// layouts
import { MainLayout } from 'layouts';

// container
import { Notion } from 'container';

// libraries
import { NotionRenderer } from 'react-notion';

// style
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { StyleNotionPage } from './style';

interface NotionPageProps {
  notionPage: any;
}

const NotionPage: React.FC<NotionPageProps> = ({ notionPage }) => {
  const handleNotion = () => {
    window.open('https://noyclah.notion.site/c6b408675eac41e2a803a7e54f8eff63');
  };

  return (
    <MainLayout>
      {/* <Notion /> */}
      <div
        onClick={handleNotion}
        style={{ marginBottom: 30, cursor: 'pointer' }}
      >
        노션으로 보기
      </div>
      {Object.keys(notionPage).length && (
        <StyleNotionPage style={{ background: '#fff' }}>
          <NotionRenderer blockMap={notionPage} fullPage />
        </StyleNotionPage>
      )}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const NOTION_PAGE_ID =
      'c6b408675eac41e2a803a7e54f8eff63#e2cbf7c6ea3045669e6891561555ac9f';

    const notion = await fetch(
      `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`
    )
      .then((res) => res.json())
      .then((res) => res);

    return {
      props: {
        notionPage: JSON.parse(JSON.stringify(notion))
      }
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true
    };
  }
};

export default NotionPage;
