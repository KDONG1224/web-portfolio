// base
import React, { useState } from 'react';

// layouts
import { MainLayout } from 'layouts';

// container
import { Notion } from 'container';
import { notionApi } from 'modules/notion';
import useSWR from 'swr';
import { SWR_NOTION_KEY } from 'const';
import { NotionAPI } from 'notion-client';
import { useEffect } from 'react';
import axios from 'axios';

const NotionPage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const notion = new NotionAPI();

  // const pageId = 'd3a38244b50949ee92a569861afbe176';

  // const getNotionPage = async () => {
  //   if (!isLoading) return null;
  //   // return await notionApi.getPage('067dd719a912471ea9a3ac10710e7fdf');
  //   const recordMap = await notion.getPage(pageId);
  //   console.log('recordMap : ', recordMap);
  //   return notionApi.getNotionPage(pageId);
  // };

  // const { data } = useSWR([SWR_NOTION_KEY], () => getNotionPage());

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [data]);

  // const [response, setResponse] = useState({});

  // useEffect(() => {
  //   const NOTION_PAGE_ID = '3acdc15e805b4f8faacf8a3dfdc59d17';
  //   axios
  //     .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
  //     .then(({ data }) => {
  //       setResponse(data);
  //     });
  // }, []);

  return (
    <MainLayout>
      <Notion />
    </MainLayout>
  );
};

export default NotionPage;
