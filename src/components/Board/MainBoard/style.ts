import styled from 'styled-components';

export const StyledHomeBoard = styled.div`
  margin-top: 60px;
  background: #fff;
  border-radius: 20px;

  .board-wrapper {
    padding: 20px;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;

      &-left {
        display: flex;
        align-items: center;

        &-title {
          margin-left: 20px;
          > p {
            &:first-child {
              padding-bottom: 10px;
            }
            &:last-child {
              font-size: 10px;
              color: #959eae;
            }
          }
        }
      }

      &-right {
        > span {
          border-radius: 50%;
          width: 8px;
          height: 8px;
          background: #faa3a3;
          display: inline-block;

          &:nth-child(2) {
            margin: 0 4px;
            background: #ed783d;
          }

          &:last-child {
            background: #000;
          }
        }
      }
    }

    &-middle {
      margin-top: 20px;
      overflow: hidden;

      &-contents {
        padding: 20px 0;
        line-height: 1.5;
        font-size: 20px;
      }
    }
    &-bottom {
    }
  }

  .ant-avatar.ant-avatar-icon {
    font-size: 60px;
  }
`;
