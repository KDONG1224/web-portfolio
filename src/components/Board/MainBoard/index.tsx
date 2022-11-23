import { exImg } from 'const';
import React from 'react';
import { StyledHomeBoard } from './style';
import Image from 'next/image';
import moment from 'moment';

interface HomeBoardProps {
  writer: string;
  created: string;
  profileImage: string;
  imageUrl: string;
  contents: string;
}

export const HomeBoard: React.FC<HomeBoardProps> = ({
  writer,
  created,
  profileImage,
  imageUrl,
  contents
}) => {
  return (
    <StyledHomeBoard>
      <div className="board-wrapper">
        <div className="board-wrapper-top">
          <div className="board-wrapper-top-left">
            <Image
              src={profileImage || exImg.EX_NUM_07}
              alt="s"
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
            <div className="board-wrapper-top-left-title">
              <p>{writer || 'KDONG'}</p>
              <p>
                {created || moment(new Date()).format('YYYY-MM-DD, A HH-MM-ss')}
              </p>
            </div>
          </div>
          <div className="board-wrapper-top-right">
            <span className="board-wrapper-top-right-one"></span>
            <span className="board-wrapper-top-right-second"></span>
            <span className="board-wrapper-top-right-third"></span>
          </div>
        </div>
        <div className="board-wrapper-middle">
          {imageUrl && (
            <Image
              src={exImg.EX_NUM_04}
              alt="ss"
              width={600}
              height={600}
              objectFit="cover"
            />
          )}
          <p className="board-wrapper-middle-contents">
            {contents || '안녕하세용!'}
          </p>
        </div>
        <div className="board-wrapper-bottom"></div>
      </div>
    </StyledHomeBoard>
  );
};
