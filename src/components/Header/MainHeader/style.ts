import styled from 'styled-components';
import { Layout } from 'antd';

interface StyledMainHeaderProps {
  isMobile: boolean;
}

export const StyledMainHeader = styled(Layout.Header)<StyledMainHeaderProps>`
  height: 80px;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  .header-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-left {
      width: ${({ isMobile }) => isMobile && '100%'};
      display: flex;
      align-items: center;

      &-title {
        display: flex;
        align-items: center;
        cursor: pointer;

        &-name {
          margin-left: 10px;
        }
      }

      &-search {
        margin-left: 100px;
        display: flex;
        align-items: center;

        .ant-input {
          height: 40px;
          border: none;
          border: 1px solid #b8bec9;
          width: 600px;
        }

        .ant-input-search-button {
          height: 40px !important;
          border: 1px solid #b8bec9 !important;
          border-left: none !important;
          color: #b8bec9 !important;
          background: #fff !important;
        }
      }
    }

    &-right {
      display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
      align-items: center;

      &-name {
        margin-right: 10px;
      }
    }
  }
`;
