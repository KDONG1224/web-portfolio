import styled from 'styled-components';

interface StyledReferenceListsProps {
  isMobile: boolean;
}

export const StyledReferenceLists = styled.div<StyledReferenceListsProps>`
  background: #fff;

  .ant-table-tbody > tr > td {
    vertical-align: middle !important;
  }

  .refer-head {
    ${({ isMobile }) =>
      isMobile &&
      `font-size: 4.5rem;
    padding-top: 120px;
    text-align: center;

    > p {
      font-size: 2rem;
      margin-top: 20px;
    }`}
  }

  .refer-body {
    margin-top: 50px;
  }
`;
