// styled
import styled from 'styled-components';

// libraries
import { Input } from 'antd';
import { TextArea } from 'antd-mobile';

interface PrefixStyledProps {
  labelWidth?: string;
}

export const PrefixStyled = styled.div<PrefixStyledProps>`
  color: #1e1e1e;
  font-size: 1.6rem;
  min-width: 12rem;
  ${(props: { labelWidth?: string }) =>
    props.labelWidth ? `width: ${props.labelWidth};` : ''}
  align-self: center;
`;

export const AffixStyled = styled.div`
  position: absolute;
  top: 50%;
  right: 3.5rem;
  width: 2rem;
  transform: translateY(-50%);
  color: #aaaab6;
  font-size: 1.6rem;
  align-self: center;
  display: table;
`;

export const InputStringStyled = styled(Input)`
  border: 1px solid #aaaab6;
  box-sizing: border-box;
  border-radius: 0.4rem;
  min-height: 4.6rem;
  display: block;

  & .ant-input {
    min-height: 4.6rem;
    color: #1e1e1e;
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const TextAreaStringStyled = styled(TextArea)`
  border: 1px solid #aaaab6;
  box-sizing: border-box;
  border-radius: 0.4rem;
  min-height: 4.6rem;
`;
