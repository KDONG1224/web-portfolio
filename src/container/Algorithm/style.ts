import styled from 'styled-components';

interface StyledAlgorithmProps {
  ismobile: string;
}

export const StyledAlgorithm = styled.div<StyledAlgorithmProps>`
  padding: ${({ ismobile }) => (ismobile === 'true' ? '140px 0 36px' : '36px')};
  background-color: #fff;

  .algo-card-wrapper {
    .algo-wrapper {
      max-height: none !important;

      &-top {
        max-height: none !important;
      }

      &-bottom {
        height: 100%;
        background-color: #f0f2f5;

        &-desc {
          height: 44px;
        }

        &-move {
          margin-top: 24px;
        }
      }
    }
  }

  .algo-title {
    /* padding-bottom: 80px; */

    &-head {
      font-family: 'GmarketSans-Bold';
      font-size: 4rem;
      text-align: center;
      margin-bottom: 30px;
    }

    &-desc {
      font-size: 2rem;
      text-align: center;
      padding-bottom: ${({ ismobile }) => (ismobile ? '36px' : '0')};
    }
  }

  .algo-create {
    width: 100%;
    flex-direction: row-reverse;
    padding: 40px 0;
    padding-right: 1.5%;
  }
`;
