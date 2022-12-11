import { arrowIcons } from 'consts';
import styled from 'styled-components';

export const StyledBasicCard = styled.div`
  .algo-wrapper {
    /* max-width: 350px; */
    max-height: 430px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;

    &-top {
      width: 100%;
      max-height: 200px;
      height: 100%;
      border-radius: 10px 10px 0 0;

      &-top {
        border-radius: 10px 10px 0 0;
        transform: scale(1);
        transition: transform 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955);

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    &-bottom {
      height: 230px;
      padding: 18px;
      font-size: 18px;

      &-date {
        &-tag {
          .ant-tag {
            border: none;
            font-size: 10px;
            padding: 0px 10px;
            margin-right: 12px;
            font-family: 'GmarketSans-Medium';
          }
        }

        &-text {
          color: #959eae;
          font-size: 12px;
          font-family: 'GmarketSans-Medium';
        }
      }

      &-title {
        padding: 18px 0 16px;
        font-size: 20px;
        line-height: 26px;
        color: #4e5d78;
        font-family: 'GmarketSans-Bold';
      }

      &-desc {
        padding-bottom: 24px;
        line-height: 22px;
        color: #959eae;
        font-size: 16px;
        font-family: 'GmarketSans-Medium';
      }

      &-move {
        color: #377dff;
        font-size: 14px;
        font-family: 'GmarketSans-Medium';
        position: relative;

        &::after {
          content: '';
          width: 16px;
          height: 16px;
          position: absolute;
          left: 100px;
          top: -2px;
          background: url(${arrowIcons.RIGHT_TOP_ARROW_ICON}) center center /
            contain no-repeat;
          background-size: 60%;
        }
      }
    }
  }

  @media (max-width: 750px) {
    .algo-wrapper {
      max-width: 300px;
      width: 100%;
      max-height: 600px;

      &-top {
        max-height: 300px;
      }

      &-bottom {
        height: 290px;
        font-size: 24px;

        &-title {
          padding-bottom: 8px;
        }

        &-date {
          color: #959eae;
          font-size: 20px;

          &-tag {
            .ant-tag {
              width: 100%;
              font-size: 22px;
              padding: 16px 20px;
              text-align: center;
              color: #fff;
              background-color: red;
            }
          }
        }

        &-desc {
          margin-top: 20px;
          font-size: 22px;
          line-height: 1.2;
        }

        &-move {
          font-size: 20px;

          &::after {
            left: 140px;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
