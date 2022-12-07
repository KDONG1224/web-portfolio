// base
import { Input } from 'antd';
import { exImg, socialIcons } from 'consts';
import { ROUTE_ROOT } from 'consts/route';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

// style
import { StyledMainHeader } from './style';

interface MainHeaderProps {}

export const MainHeader: React.FC<MainHeaderProps> = ({}) => {
  const router = useRouter();

  const onSearch = (value: string) => console.log(value);

  const handleRouter = () => {
    router.push(ROUTE_ROOT);
  };

  return (
    <StyledMainHeader>
      <div className="header-wrapper">
        <div className="header-wrapper-left">
          <div className="header-wrapper-left-title" onClick={handleRouter}>
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
        <div
          className="header-wrapper-right"
          onClick={() => router.push('http://api.kdong-server.com/api')}
          style={{
            cursor: 'pointer'
          }}
        >
          <span
            className="header-wrapper-right-name"
            style={{
              cursor: 'pointer'
            }}
          >
            Apis 바로가기 (kdong1224 / 1224)
          </span>
          <Image
            src={socialIcons.API_ICON}
            alt="메인로고"
            width={30}
            height={30}
            style={{
              cursor: 'pointer'
            }}
          />
        </div>
      </div>
    </StyledMainHeader>
  );
};
