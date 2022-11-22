// base
import { Input } from 'antd';
import { exImg } from 'const';
import Image from 'next/image';
import React from 'react';

// style
import { StyledMainHeader } from './style';

interface MainHeaderProps {}

export const MainHeader: React.FC<MainHeaderProps> = ({}) => {
  const onSearch = (value: string) => console.log(value);

  return (
    <StyledMainHeader>
      <div className="header-wrapper">
        <div className="header-wrapper-left">
          <div className="header-wrapper-left-title">
            <Image
              src={exImg.EX_NUM_01}
              alt="메인로고"
              width={30}
              height={30}
            />
            <span className="header-wrapper-title-name">KDONG Portfolio</span>
          </div>
          <div className="header-wrapper-left-search">
            <Input.Search
              placeholder="검색어를 입력해주세요"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <div className="header-wrapper-right">
          <span className="header-wrapper-right-name">KDONG</span>
          <Image src={exImg.EX_NUM_02} alt="메인로고" width={30} height={30} />
        </div>
      </div>
    </StyledMainHeader>
  );
};
