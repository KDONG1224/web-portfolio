import { Form } from 'antd';
import styled from 'styled-components';

export const StyledAlgorithmForm = styled(Form)`
  .ant-form-item {
    margin: 0;
  }

  .thumbmnaile {
    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
    }
  }

  .submit-btn {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    padding: 25px 40px;
    bottom: -25px;
    border-radius: 50px;
    background: rebeccapurple;
    color: #fff;
  }
`;
