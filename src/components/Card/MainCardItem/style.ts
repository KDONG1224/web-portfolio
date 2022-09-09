import styled from 'styled-components';

interface StyledMainCardItemProps {
  isMobile: boolean;
}

export const StyledMainCardItem = styled.div<StyledMainCardItemProps>`
  /* width: 250px; */

  ${(props) =>
    props.isMobile &&
    `
    .card-wrapper {
      width: 100%;
      height: 100% !important;

      &-top {
        height: 160px !important;

        img {
          height: 160px !important;
        }
      }

      &-bottom {
        margin-top: 10px !important;

        &-title {
          font-size: 16px !important;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-break: break-all;
          white-space: break-spaces !important;
          text-align: center;
        }

        &-desc {
          margin-top: 5px !important;
          font-size: 12px;
          text-align: center;
        }
      }
    }
  `}

  .card-wrapper {
    height: 340px;

    .card-wrapper-top .card-wrapper-top-hover {
      transition: transform 0.7s ease-in-out;
      transform: translateY(100%);
    }

    .card-wrapper-top:hover .card-wrapper-top-hover {
      transform: translateY(0%);
    }

    &-top {
      height: 230px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      &-hover {
        background: rgba(188, 181, 215, 0.5);
        color: #d0c8ff;
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        text-align: center;

        strong {
          font-size: 24px;
          display: block;
          font-weight: 500;
          margin-bottom: 5px;
        }

        span {
          color: #d0c8ff;
        }
      }
    }

    &-bottom {
      margin-top: 20px;

      &-title {
        font-size: 1.2rem;
      }

      &-desc {
        margin-top: 10px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        white-space: break-spaces !important;
        line-height: 140%;
      }
    }
  }
`;

export const StyledMainCardItemMobile = styled.div``;
