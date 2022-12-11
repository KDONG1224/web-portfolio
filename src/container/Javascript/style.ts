import styled from 'styled-components';

export const StyledJavascript = styled.div`
  background-color: #fff;

  #wrap {
    margin: 2vh;
    border: 8px solid #0e43f1;
    border-radius: 20px;
    height: 96vh;
  }
  #contents {
    border: 8px solid #50b5f9;
    border-radius: 12px;
    text-align: center;
    padding: 5% 2%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #contents h1 {
    color: #0e43f1;
    font-size: 8vw;
    text-transform: uppercase;
  }

  #contents p {
    background: #0e43f1;
    color: #fff;
    display: inline-block;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 3rem;
    margin-bottom: 2%;
    border: 1px solid #fff;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  #contents p a.active {
    background: #fff;
    border: 1px solid #0e43f1;
    color: #0e43f1;
  }

  .menu .menu-item {
    display: inline;
  }

  .menu .menu-item {
    color: #0e43f1;
    border: 1px dashed #0e43f1;
    padding: 10px 30px;
    display: inline-block;
    border-radius: 50px;
    font-size: 16px;
    margin: 4px 1px;
    box-shadow: inset 0 0 0 #0e43f1;
    transition: all 0.4s;
  }
  .menu .menu-item:hover {
    box-shadow: inset 0 -100px 0 #0e43f1;
    color: #fff;
    border-style: solid;
  }
  .page {
    position: absolute;
    right: 35px;
    top: 35px;
  }
  .page li {
    display: inline; /* inline-block(?) */
    list-style: none;
  }
  .page li a {
    text-decoration: none;
    color: #222;
  }
  .page li a {
    color: #fff;
  }
  .design {
    position: absolute;
    left: 35px;
    top: 35px;
  }

  @media (max-width: 750px) {
    padding-top: 100px;
    height: 100vh;

    #wrap {
      margin: 0;
      height: 100%;
      border-width: 1rem;
      border-radius: 18px;
    }
    #contents {
      border-width: 1rem;
      padding: 15% 2%;
    }

    #contents h1 {
      font-size: 5rem;
      font-family: 'NEXON Lv1 Gothic OTF';
    }

    #contents p {
      margin-top: 10px;
      font-size: 1.5rem;
    }

    .menu {
      margin-top: 60px;
    }

    .menu-col {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu li a {
      font-size: 20px;
      padding: 5px 20px;
    }
    .page {
      position: absolute;
      right: 20px;
      top: 15px;
    }
    .page li a {
      color: #fff;
    }
    .design {
      position: absolute;
      left: 15px;
      top: 15px;
    }
  }
`;
