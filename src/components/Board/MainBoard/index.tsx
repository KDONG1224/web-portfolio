import { exImg } from 'consts';
import React from 'react';
import { StyledHomeBoard } from './style';
import Image from 'next/image';
import moment from 'moment';
import { BlurImage } from 'components/Images';

interface HomeBoardProps {
  data: any;
}

export const HomeBoard: React.FC<HomeBoardProps> = ({ data }) => {
  const { name, content, images, createdAt } = data;

  return (
    <StyledHomeBoard>
      <div className="board-wrapper">
        <div className="board-wrapper-top">
          <div className="board-wrapper-top-left">
            <BlurImage
              src={images}
              alt={name}
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
            <div className="board-wrapper-top-left-title">
              <p>{name}</p>
              <p>{moment(createdAt).format('YYYY-MM-DD, A HH-MM-ss')}</p>
            </div>
          </div>
          <div className="board-wrapper-top-right">
            <span className="board-wrapper-top-right-one"></span>
            <span className="board-wrapper-top-right-second"></span>
            <span className="board-wrapper-top-right-third"></span>
          </div>
        </div>
        <div className="board-wrapper-middle">
          <Image
            src={images}
            alt={name}
            width={600}
            height={600}
            objectFit="contain"
          />
          <p className="board-wrapper-middle-contents">{content}</p>
        </div>
        <div className="board-wrapper-bottom"></div>
      </div>
    </StyledHomeBoard>
  );
};
