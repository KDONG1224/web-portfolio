// base
import React from 'react';
import ReactDOM from 'react-dom';

// antd
import { Spin } from 'antd';

// style
import { SpinContainer } from './style';

export const PageLoader = () => {
  return ReactDOM.createPortal(
    <SpinContainer>
      <Spin />
    </SpinContainer>,
    document.body
  );
};
