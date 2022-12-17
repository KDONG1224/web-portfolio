import styled from 'styled-components';
import { Drawer } from 'antd';

interface StyledCommonDrawerProps {
  // size: string;
}

export const StyledCommonDrawer = styled(Drawer)<StyledCommonDrawerProps>`
  .ant-drawer-body {
    padding: 0 !important;
  }

  .drawer-wrapper {
    &-header {
      margin-bottom: 50px;
    }

    &-contents {
    }
  }

  .ant-drawer-content-wrapper {
    height: 100% !important;
  }
`;
