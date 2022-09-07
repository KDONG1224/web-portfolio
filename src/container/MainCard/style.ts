import styled from 'styled-components';

interface StyledMainCardProps {
  isMobile: boolean;
}

export const StyledMainCard = styled.div<StyledMainCardProps>`
  .ant-col {
    /* max-width: 360px !important; */
  }

  ${(props) =>
    props.isMobile &&
    `
    .ant-row {
      width: 100%;
      margin: 0 !impotant;
    }

    .card-wrapper {
      height: 150px;
    }
    
    .card-wrapper-top {
      height: 60px;
    }
    
    .card-wrapper-bottom-title {
      font-size: 0.8rem;
      text-align: center;
    }
  `}
`;
