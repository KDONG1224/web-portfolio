// style
import styled from "styled-components";

// libraries
import { InputNumber } from "antd";

export const PrefixStyled = styled.div`
  color: #1e1e1e;
  font-size: 1.6rem;
  min-width: 11rem;
  max-width: 11rem;
`;

export const AffixStyled = styled.div`
  position: absolute;
  top: 50%;
  right: 3.5rem;
  width: 2rem;
  transform: translateY(-50%);
  color: #aaaab6;
  font-size: 1.6rem;
`;

export const InputNumberStyled = styled(InputNumber)`
  border: 1px solid #aaaab6;
  box-sizing: border-box;
  border-radius: 0.4rem;
  min-height: 4.6rem;
  min-width: 15rem;

  & .ant-input-number-input {
    min-height: 4.6rem;
    color: #1e1e1e;
    font-size: 1.5rem;
    text-align: left;
  }
`;