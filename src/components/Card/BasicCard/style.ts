import { arrowIcons } from 'consts';
import styled from 'styled-components';

export const StyledAlgorithmCard = styled.div`
  .algo-wrapper {
    /* max-width: 350px; */
    max-height: 430px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;

    &-top {
      width: 100%;
      max-height: 200px;
      height: 100%;
      border-radius: 10px 10px 0 0;

      img {
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
        > a {
          color: #377dff;
          font-size: 14px;
          font-family: 'GmarketSans-Medium';
          position: relative;

          &::after {
            content: '';
            width: 16px;
            height: 16px;
            position: absolute;
            right: -20px;
            top: -2px;
            background: url(${arrowIcons.RIGHT_TOP_ARROW_ICON}) center center /
              contain no-repeat;
            background-size: 60%;
          }
        }
      }
    }
  }
`;
