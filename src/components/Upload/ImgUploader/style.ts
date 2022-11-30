import styled from 'styled-components';

export const StyledImgUploader = styled.div`
  input {
    border: 1px solid #aaaab6;
    box-sizing: border-box;
    border-radius: 0.4rem;
    min-height: 4.6rem;
    display: block;
  }

  .input-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .input-text {
    width: calc(100% - 100px);
    border: 1px solid #d9d9d9;
    line-height: 50px;
    font-size: 1rem;
    color: #888;
    padding: 0 24px;
    white-space: nowrap;
  }

  .input-plus {
    width: 50px;
    background: #888;
    color: #fff;
    font-size: 48px;
    text-align: center;
    line-height: 50px;
  }

  &.ant-input {
    min-height: 4.6rem;
    color: #1e1e1e;
    font-size: 1.5rem;
    text-align: left;
  }
`;
