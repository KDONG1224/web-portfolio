import React from 'react';

import { Result, Button } from 'antd';
import { useHistory } from 'react-router';
import { ROUTE_ROOT } from 'routes/const';
import styled from 'styled-components';

const StyledNotFoundPage = styled(Result)`
  padding: 48px 32px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ant-result-image {
    width: auto;
    height: auto;
    margin: 0;
  }
`;

export const NotFoundResult = () => {
  const history = useHistory();

  const handleOnClickHomeMove = () => {
    history.push(ROUTE_ROOT);
  };

  return (
    <StyledNotFoundPage
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={handleOnClickHomeMove}>
          Back Home
        </Button>
      }
    />
  );
};
