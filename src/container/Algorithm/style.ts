import styled from 'styled-components';

interface StyledAlgorithmProps {
  isMobile: boolean;
}

export const StyledAlgorithm = styled.div<StyledAlgorithmProps>`
  padding: ${({ isMobile }) => (isMobile ? '120px 0 36px' : '36px 0')};
  .algo-title {
    padding-bottom: 80px;

    &-head {
      font-family: 'GmarketSans-Bold';
      font-size: 4rem;
      text-align: center;
      margin-bottom: 30px;
    }

    &-desc {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
