// base
import React, { useEffect, useMemo, useState } from 'react';

// style
import { StyledNotion } from './style';

// notion
// import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';

// library
import useSWR from 'swr';

// const
import { SWR_NOTION_KEY } from 'const';
import { notionApi } from 'modules/notion';
import axios from 'axios';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting

interface NotionProps {
  // data: any;
}

export const Notion: React.FC<NotionProps> = ({}) => {
  // const notionApi = useMemo(() => {
  //   return new NotionAPI();
  // }, []);

  // const [response, setResponse] = useState({});

  // useEffect(() => {
  //   const NOTION_PAGE_ID = 'var-let-const-d3a38244b50949ee92a569861afbe176';
  //   axios
  //     .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
  //     .then(({ data }) => {
  //       console.log('data : ', data);
  //       setResponse(data);
  //     });
  // }, []);

  // console.log('response : ', response);

  return (
    <StyledNotion>
      <div>노션 페이지 - 준비중...</div>
      {/* <div>{JSON.stringify(response)}</div>
      {Object.keys(response).length && (
        <NotionRenderer recordMap={response} fullPage={true} />
      )} */}

      {/* <NotionRenderer recordMap={data} /> */}
    </StyledNotion>
  );
};
