// base
import React, { useMemo } from 'react';

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

interface NotionProps {
  data: any;
}

export const Notion: React.FC<NotionProps> = ({ data }) => {
  // const notionApi = useMemo(() => {
  //   return new NotionAPI();
  // }, []);

  console.log('data : ', data);

  return (
    <StyledNotion>
      <div>노션 페이지</div>
      <div>{JSON.stringify(data)}</div>

      {/* <NotionRenderer recordMap={data} /> */}
    </StyledNotion>
  );
};
