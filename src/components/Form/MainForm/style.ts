import { Form } from 'antd';
import styled from 'styled-components';

export const StyledMainForm = styled(Form)`
  background: #fff !important;
  border-radius: 10px;

  .form-wrapper {
    &-top {
      padding: 15px;
      border-bottom: 1px solid #dcdfe4;
    }

    &-middle {
      > .ant-form-item {
        margin: 0;
      }
      &-content {
        textarea.ant-input {
          resize: none;
          height: 200px;
          background: #f6f7f8;
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #dcdfe4;
          padding: 30px;
        }
      }

      &-top {
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 10px;

        > .ant-form-item {
          margin: 0;
        }
        .ant-input {
          height: 30px !important;
        }
      }
    }

    &-bottom {
      padding: 10px 20px 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .guest-images {
        .ant-form-item-control-input-content {
          display: flex;
          align-items: center;
        }
      }

      > button {
        background-color: #377dff;
        color: #fff;
      }
    }
  }
`;
