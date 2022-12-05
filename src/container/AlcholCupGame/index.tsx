// base
import React from 'react';

// style
import { StyledAlcholCupGame } from './style';

//
import { exImg } from 'consts';

interface AlcholCupGameProps {}

export const AlcholCupGame: React.FC<AlcholCupGameProps> = ({}) => {
  return (
    <StyledAlcholCupGame>
      <div className="game-title">안녕하세용 게임시작입니당.</div>
      <div className="game-wrapper">
        <div className="game-wrapper-body">
          <div className="game-wrapper-body-img">
            <img src={exImg.EX_NUM_06} alt={'drinks.name'} />
          </div>
          <p className="game-wrapper-body-p">알콜1</p>
        </div>
        <div className="game-wrapper-body">
          <div className="game-wrapper-body-img">
            <img src={exImg.EX_NUM_02} alt={'drinks.name'} />
          </div>
          <p className="game-wrapper-body-p">알콜2</p>
        </div>
      </div>
    </StyledAlcholCupGame>
  );
};
