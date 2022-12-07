import { mainBanner } from 'consts';
import styled from 'styled-components';

export const StyledAlgorithmDetails = styled.div`
  background: url(${mainBanner.NOISE_IMAGE_1}) black center center / cover
    no-repeat;
  padding-bottom: 50px;

  .algo-wrapper {
    margin: 0;
    padding: 0;
    padding: 0 5rem;
    font-family: 'Eulyoo1945-Regular';

    &-title {
      text-align: center;
      padding-top: 50px;
      position: relative;

      h1 {
        margin: 30px 0;
        font-size: 40px;
        font-family: 'Eulyoo1945-SemiBold';
      }

      em {
        position: absolute;
        content: '';
        bottom: 0;
        right: 6.5rem;
        font-style: normal;
        border: 1px solid #202b3d;
        border-radius: 10px;
        padding: 10px 30px;
      }
    }

    &-info {
      display: flex;
      flex-wrap: nowrap;
      padding: 0 10rem;
      margin-bottom: 50px;

      > table {
        border-collapse: collapse;
        margin: 0 auto;

        td {
          padding: 7px;
          border: 1px solid #202b3d;
          text-align: center;
        }
      }
    }

    &-question {
      width: 100%;
      padding: 20px;
      padding-top: 60px;
      border: 1px solid #202b3d;
      border-radius: 5px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      margin-bottom: 20px;

      > span {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #202b3d;
        color: #fff;
        border-radius: 30px;
        padding: 5px 10px;
        font-size: 14px;
      }

      > em {
        width: 100%;
        font-style: normal;
        padding-left: 14px;
        padding-top: 10px;
        color: #777;
        line-height: 1.4;
      }
    }

    &-answer {
      background-color: #f5f5f5;
      padding: 20px;
      padding-top: 60px;
      border-radius: 5px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      margin-bottom: 50px;

      > span {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #202b3d;
        color: #fff;
        border-radius: 30px;
        padding: 5px 10px;
        font-size: 14px;
      }
    }
  }
`;
