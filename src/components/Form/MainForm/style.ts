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
    }

    &-bottom {
      padding: 10px 20px 10px 0;
      display: flex;
      justify-content: flex-end;

      > button {
        background-color: #377dff;
        color: #fff;
      }
    }
  }
`;
