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
    padding: 0 10px 50px;

    .ant-row {
      width: 100%;
      margin: 0 !impotant;
      margin-left: 0px !important;
      margin-right: 0px !important;
    }

    .ant-col {
      padding-left: 10px !important;
      padding-right: 10px !important;
    }
  `}
`;
