import styled from 'styled-components';

export const StyledAlcholCupGame = styled.div`
  padding: 36px 0;

  .game-title {
    font-size: 4rem;
    padding-bottom: 36px;
  }

  .game-wrapper {
    padding: 5px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-body {
      text-align: center;
      width: 49%;
      height: 100%;
      background-color: #33434d;
      overflow: hidden;
      position: relative;

      &-img {
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &-p {
        font-size: 1.6rem;
        background-color: #000000b5;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
      }
    }
  }

  .rounds {
    /* font-family: 'Harmony_B'; */
    font-size: 2.2rem;
    text-align: center;

    span {
      font-size: 1.8rem;
    }
  }
`;
