import styled from 'styled-components';

export const StyledCommonCard = styled.div`
  cursor: pointer;
  width: 350px;
  .card-wrapper {
    width: 350px !important;
    &-top {
      width: 100%;
      height: 520px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &-desc {
        /* background: rgba(188, 181, 215, 0.5); */
        background: #bcb5d7;
        opacity: 0.5;
        color: #745a00;
        position: absolute;
        left: -50%;
        transform: translateX(-50%);
        bottom: 0px;
        width: 350px;
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
          color: #745a00;
        }
      }
    }
  }
`;
