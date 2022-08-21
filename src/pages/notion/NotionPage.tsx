// base
import React from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { Notion } from 'container';
import { notionApi } from 'modules/notion';
import useSWR from 'swr';
import { SWR_NOTION_KEY } from 'const';

const NotionPage = () => {
  const getNotionPage = () => {
    // return await notionApi.getPage('067dd719a912471ea9a3ac10710e7fdf');
    return notionApi.getNotionPage('067dd719a912471ea9a3ac10710e7fdf');
  };

  const { data } = useSWR([SWR_NOTION_KEY], () => getNotionPage());

  console.log(data);
  return (
    <MainLayout>
      <Notion data={data} />
    </MainLayout>
  );
};

export default NotionPage;
