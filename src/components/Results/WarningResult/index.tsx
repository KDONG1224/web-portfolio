import React from 'react';

import { Result } from 'antd';

import styled from 'styled-components';

const StyledResult = styled(Result)`
  padding: 48px 32px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WarningResult = () => {
  return (
    <StyledResult
      status='warning'
      title={
        <div>
          서버 점검중입니다
          <br />
          나중에 다시 이용해주세요
        </div>
      }
    />
  );
};
