import styled from 'styled-components';

interface StyledPaginationTableProps {
  isNotWrapMarginTop: boolean;
  noPadding?: boolean;
}

export const StyledPaginationTable = styled.div<StyledPaginationTableProps>`
  background-color: #fff;
  border-radius: 0.4rem;
  margin-top: ${props => (props.isNotWrapMarginTop ? '0' : '2.4rem')};
  padding: ${props => (props.noPadding ? 0 : '1rem 3.4rem')};

  & .table-header {
    font-weight: 500;
    color: #1e1e1e;
    font-size: 1.9rem;
    height: 7.3rem;
    line-height: 7.3rem;
    border-bottom: 1px solid #e0e0e1;
  }

  & .table-sub-header {
    font-weight: 500;
    color: #1e1e1e;
    font-size: 1.9rem;
    height: 7.5rem;
    border-bottom: 1px solid #e0e0e1;
  }
`;
