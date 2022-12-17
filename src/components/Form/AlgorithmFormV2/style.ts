import { Form } from 'antd';
import styled from 'styled-components';

export const StyledAlgorithmForm = styled(Form)`
  .algo-wrapper {
    padding: 36px 36px 140px;

    .ant-form-item {
      margin: 0;
    }

    .ant-descriptions-item-label {
      background-color: #ddd;
    }

    .ant-descriptions-item-content {
      padding: 22px 36px;
    }

    .thumbmnaile {
      .ant-form-item-control-input-content {
        display: flex;
        align-items: center;
      }
    }
  }
`;
