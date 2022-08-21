import styled from 'styled-components';

export const StyledAlgorithmDetails = styled.div`
  .detail-head {
    font-size: 3rem;
    padding: 36px 0;
  }

  .sample {
    border: 2px solid #000;
    border-radius: 5px;
    background: #fff;
  }
  .sample h2 {
    position: relative;
    font-size: 2rem;
    background-color: #afafaf;
    padding: 15px;
    border-bottom: 2px solid #000;
    border-radius: 5px 5px 0 0;
  }
  .sample h2 .dot {
    width: 15px;
    height: 15px;
    background: #efbd5a;
    display: block;
    border-radius: 50%;
    position: absolute;
    right: 50px;
    top: 25px;
  }
  .sample h2 .dot::before {
    content: '';
    width: 15px;
    height: 15px;
    background: #5b86d5;
    border-radius: 50%;
    position: absolute;
    left: -30px;
    top: 0;
  }
  .sample h2 .dot::after {
    content: '';
    width: 15px;
    height: 15px;
    background: #cc4d58;
    position: absolute;
    border-radius: 50%;
    right: -30px;
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
    border-bottom: 2px solid #000;
    line-height: 1.6;

    > strong {
      font-size: 50px;
      font-weight: bold;
      color: red;
    }
  }
  .sample pre {
    margin: 0 !important;
    border-radius: 0;
  }
  .sample .desc {
    padding: 25px;
    border-bottom: 2px solid #000;
  }
  .sample .desc dt {
    padding: 3px 0;
    margin-bottom: 6px;
    line-height: 1.6;
  }
  .sample .desc dd {
    padding: 3px 0 16px 0;
    line-height: 1.6;
  }
  .sample .sam {
    padding: 25px;
    /* border-bottom: 2px solid #000; */
  }
  .sample .sam dt {
    padding: 3px 0;
    margin-bottom: 6px;
  }
  .sample .sam dd {
    padding: 3px 0 16px 0;
  }
  ol {
    list-style: none;
    margin-bottom: 40px;
  }
  ol li {
    border: 1px solid #000;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
  }
  ol li.active {
    background: #000;
  }
  ol li.active a {
    color: #fff;
  }

  .answer-btn {
    margin-top: 20px;
  }

  .ant-collapse {
    background: transparent;
    border: none;

    > .ant-collapse-item {
      border: none;
    }
  }

  .ant-collapse-header {
    width: 120px;
    background: #fff;
    border: 1px solid #f7f7f7 !important;
    border-radius: 5px !important;
  }
`;
