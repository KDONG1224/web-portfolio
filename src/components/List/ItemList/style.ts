import styled from 'styled-components';

interface StyledItemListProps {}

export const StyledItemList = styled.div<StyledItemListProps>`
  background-color: #fff;
  border-radius: 0.4rem;
  margin: 2.4rem 0;
  padding: 1rem 3.4rem;

  .ant-list-item-meta-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
