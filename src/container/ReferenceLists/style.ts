import styled from 'styled-components';

interface StyledReferenceListsProps {
  ismobile: boolean;
}

export const StyledReferenceLists = styled.div<StyledReferenceListsProps>`
  background: #fff;
  padding: 36px;
  .ant-table-tbody > tr > td {
    vertical-align: middle !important;
  }

  .refer-head {
    ${({ ismobile }) =>
      ismobile &&
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
