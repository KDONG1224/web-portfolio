import styled from 'styled-components';

export const StyledDetailContent = styled.div`
  margin-top: 50px;
  background-color: #fff;
  padding: 0 36px 100px;

  .sample {
    /* border: 1px solid #E6E6E6; */
    border-radius: 5px;
    margin-bottom: 60px;
  }
  .sample h2 {
    position: relative;
    font-size: 16px;
    background-color: #bbdefb;
    padding: 15px;
    border: 1px solid #e6e6e6;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 100;
    -webkit-box-orient: vertical;
    width: 100%;
  }
  .sample h2 .dot {
    width: 10px;
    height: 10px;
    background: #3d5afe;
    display: block;
    border-radius: 50%;
    position: absolute;
    right: 30px;
    top: 0px;
    left: auto;
  }
  .sample h2 .dot::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #bf360c;
    border-radius: 50%;
    position: absolute;
    left: -15px;
    top: 0;
  }
  .sample h2 .dot::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #ffff00;
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
    border-bottom: 1px solid #e6e6e6;
    line-height: 1.6;
  }
  .sample pre {
    margin: 0 !important;
    border-radius: 0;
  }
  .sample .desc {
    padding: 25px;
    border-bottom: 1px solid #e6e6e6;
  }
  .sample .desc dt {
    padding: 3px 0;
    margin-bottom: 6px;
    color: rgb(85, 85, 243);
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

  .result h3 a {
    font-size: 16px;
    font-weight: normal;
    /* padding: 10px 15px; */
    background-color: #f1f1f1;
    display: inline-block;
    border-radius: 4px;
    color: #000;
    margin-top: 5px;
  }
  .result div {
    background: #272822;
    color: #fff;
    padding: 15px 20px;
    border-radius: 0 4px 4px 4px;
    /* display: none; */
  }
  .result.show div {
    display: block;
  }
  .result div span {
    display: block;
    font-size: 1.2rem;
    line-height: 1.4;
    padding: 2px;
  }

  .hljs {
    padding: 1rem;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;
