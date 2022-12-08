// base
import React from 'react';

// style
import { StyledHomeBoard } from './style';

// components
import { BlurImage } from 'components';

// libraries
import moment from 'moment';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
            {images ? (
              <BlurImage
                src={images}
                alt={name}
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
              />
            ) : (
              <Avatar
                style={{ backgroundColor: '#87d068', width: 50, height: 50 }}
                icon={<UserOutlined style={{ fontSize: 26 }} />}
              />
            )}
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
          {images && (
            <BlurImage
              src={images}
              alt={name}
              width={600}
              height={600}
              objectFit="contain"
            />
          )}
          <p className="board-wrapper-middle-contents">{content}</p>
        </div>
        <div className="board-wrapper-bottom"></div>
      </div>
    </StyledHomeBoard>
  );
};
