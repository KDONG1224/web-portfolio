import styled from 'styled-components';

export const StyledFigma = styled.div`
  padding: 36px;
  background-color: #fff;

  .figma-wrapper {
    &-title {
      font-size: 36px;
      margin-bottom: 60px;
    }

    &-body {
      &-embed {
        padding-bottom: 100px;
        > h2 {
          font-size: 20px;
          margin-bottom: 20px;
        }

        > iframe {
          background: black;
        }
      }
    }
  }
`;
