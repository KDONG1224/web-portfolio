// base
import { HomeBoard, MainForm } from 'components';
import React from 'react';

// style
import { StyledMainBoard } from './style';

// libraries
import moment from 'moment';
import { exImg } from 'consts';

export const MainBoard = () => {
  const today = moment(new Date()).format('YYYY-MM-DD, A HH-MM-ss');

  const data = Array.from({ length: 10 }).map((_, i) => ({
    writer: `KDONG - ${i + 1}`,
    created: today,
    profileImage: exImg.EX_NUM_03,
    imageUrl: exImg.EX_NUM_06,
    contents: `${
      i + 1
    } ==> 실로 청춘을 많이 바로 얼음 소리다.이것은 그들에게 만천하의 풍부하게 있는가? 살았으며, 이상 구하지 놀이 끝까지 이상 이것이다. 끝까지 인간에 그들은 칼이다. 커다란 이 기쁘며, 어디 피부가 때문이다. 이 지혜는 옷을 착목한는 피가 간에 힘차게 끓는 군영과 피다. 힘차게 아니더면, 때까지 있음으로써 인생을 풍부하게 부패뿐이다. 실현에 없으면, 살았으며, 들어 끓는 청춘의 같이, 청춘의 피다. 인생을 있으며, 구하기 꽃이 아니한 예가 붙잡아 노년에게서 힘있다. 얼음에 그들은 따뜻한 이상의 품었기 인간은 안고, 피다.`
  }));

  return (
    <StyledMainBoard>
      <div className="board-wrapper">
        <div className="board-wrapper-top">
          <MainForm />
        </div>
        <div className="board-wrapper-body">
          {data.map(({ writer, created, profileImage, imageUrl, contents }) => (
            <HomeBoard
              key={created}
              writer={writer}
              created={created}
              profileImage={profileImage}
              imageUrl={imageUrl}
              contents={contents}
            />
          ))}
        </div>
      </div>
    </StyledMainBoard>
  );
};
