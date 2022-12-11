import styled from 'styled-components';

export const StyledAlgorithmDetails = styled.div`
  background: #fff;
  padding-bottom: 50px;
  padding-top: 120px;
  position: relative;

  .select-box {
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: #989898;

    .ant-radio-button-wrapper {
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: none;
      background: #ddd;
      color: #000;

      &.ant-radio-button-wrapper-checked {
        background-color: #000;
        color: #fff;
        border: none;
      }
    }
  }

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

    &-design1 {
      .sample {
        border-radius: 5px;
        padding: 20px 60px;
      }
      .sample h2 {
        position: relative;
        font-size: 1.5rem;
        background-color: #202b3d;
        padding: 15px 15px 15px 20px;
        border-bottom: 1px solid #e6e6e6;
        border-radius: 5px 5px 0 0;
        color: #fff;
      }

      .sample h2 .dot {
        width: 10px;
        height: 10px;
        background: #989898;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: auto;
        right: 50px;
      }
      .sample h2 .dot::before {
        content: '';
        width: 10px;
        height: 10px;
        background: #989898;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: 0;
      }
      .sample h2 .dot::after {
        content: '';
        width: 10px;
        height: 10px;
        background: #989898;
        position: absolute;
        border-radius: 50%;
        right: -15px;
        top: 0;
      }
      .sample .ex {
        padding: 20px;
      }
      .sample .ex .text {
        margin: 10px 0;
      }
      .sample .re {
        padding: 20px;
        border-top: 1px solid #e6e6e6;
      }
      .sample .re a {
        color: #333;
        text-decoration: none;
        border: 1px solid #333;
        border-radius: 30px;
        padding: 10px 30px;
        margin: 5px;
        display: inline-block;
      }
      .sample .re a:hover {
        background-color: #000;
        color: #fff;
      }
      .sample .problem {
        padding: 25px;
        border-bottom: 1px solid #202b3d;
        line-height: 1.6;
        background-color: #f2f0ff;
      }
      .sample pre {
        margin: 0 !important;
        border-radius: 0;
      }
      .sample .desc {
        padding: 25px;
        border-bottom: 1px solid #202b3d;
        background-color: #f2f0ff;
      }
      .sample .desc dt {
        padding: 3px 0;
        margin-bottom: 6px;
        line-height: 1.6;

        > span {
          background-color: #202b3d;
          color: #fff;
          border-radius: 30px;
          padding: 5px 10px;
          font-size: 14px;
        }
      }
      .sample .desc dd {
        padding: 3px 0 16px 0;
        line-height: 1.6;
      }
      .sample .sam {
        padding: 25px;
        border-bottom: 1px solid #e6e6e6;
      }
      .sample .sam dt {
        padding: 3px 0;
        margin-bottom: 6px;
      }
      .sample .sam dd {
        padding: 3px 0 16px 0;
      }

      .sample .code {
        .algo-wrapper-answer {
          background-color: #f2f0ff;
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
    }

    &-design2 {
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
        background-color: #f2f0ff;
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
  }

  .algo-wrapper-code-view {
    display: flex;
    align-items: center;
  }

  pre code.hljs {
    padding: 30px;
  }

  pre {
    line-height: 2;
  }

  @media (max-width: 750px) {
    .algo-wrapper {
      &-info {
        > table {
          td {
            padding: 10px 2px;
          }
        }
      }

      &-design1 {
        .sample {
          padding: 20px 0px;
        }
      }
    }
  }
`;
