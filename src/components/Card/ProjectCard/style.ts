import styled from 'styled-components';

export const StyledProjectCard = styled.div`
  .card-wrapper {
    max-width: 300px;
    width: 100%;
    background-color: #fff;
    padding: 16px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;

    &-top {
      border-radius: 20px;
      overflow: hidden;
    }

    &-body {
      margin-top: 20px;

      > h2 {
        font-size: 30px;
        margin-bottom: 10px;
      }

      > p {
        font-size: 20px;
      }
    }

    &-footer {
      margin-top: 20px;
      border-top: 1px solid #ddd;

      > span {
        display: inline-block;
        padding-top: 12px;
        color: #ddd;
        font-size: 10px;
      }
    }
  }
`;
