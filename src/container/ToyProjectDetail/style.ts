import styled from 'styled-components';

export const StyledToyProjectDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .detail-wrapper {
    position: relative;

    &-button {
      position: sticky;
      top: -36px;
      z-index: 99;

      .ant-btn {
        width: 100%;
        height: 90px;
        background-color: black;
        color: #fff;
        font-size: 30px;
        border: none;
      }
    }
  }
`;
