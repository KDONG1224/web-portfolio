// base
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledjavascriptDetail } from './style';
import { DetailMenu } from './DetailMenu';
import { DetailContent } from './DetailContent';

export const JavascriptDetail = () => {
  const router = useRouter();
  const { url } = router.query;
  return (
    <StyledjavascriptDetail>
      <h1>Javascript 레퍼런스</h1>
      <DetailMenu />
      <DetailContent />
    </StyledjavascriptDetail>
  );
};
