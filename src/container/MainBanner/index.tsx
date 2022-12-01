// base
import React from 'react';

// components
import { BannerSlider } from 'components';

// const
import { mainBanner } from 'consts';

// style
import { StyledMainBanner, StyledMainBannerMobile } from './style';

// hooks
import { useMedia } from 'hooks';

interface MainBannerProps {}

export const MainBanner: React.FC<MainBannerProps> = ({}) => {
  const { isMobile } = useMedia();

  const bannerUrl = [
    {
      url: mainBanner.BANNER_01,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '안녕하세요! KDONG 입니다'
    },
    {
      url: mainBanner.BANNER_02,
      desc: '<div class="text-white">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '안녕하세요! KDONG 입니다'
    },
    {
      url: mainBanner.BANNER_03,
      desc: '<div class="text-white">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '안녕하세요! KDONG 입니다'
    },
    {
      url: mainBanner.BANNER_04,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '안녕하세요! KDONG 입니다'
    },
    {
      url: mainBanner.BANNER_05,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '안녕하세요! KDONG 입니다'
    },
    {
      url: mainBanner.BANNER_06,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '안녕하세요! KDONG 입니다'
    }
  ];

  const onClick = () => {
    console.log('banner Click');
  };

  const onClickSocial = (type: string) => {
    if (type === 'api')
      return window.open('https://kdong-server.herokuapp.com/api/v1/kdong');
    if (type === 'github') return window.open('https://github.com/KDONG1224');
    if (type === 'tistory')
      return window.open('https://kdong1224.tistory.com/');
    if (type === 'instagram')
      return window.open('https://www.instagram.com/noyclah_jdk/');
  };

  return (
    <>
      {!isMobile && (
        <StyledMainBanner
          style={{ backgroundColor: '#efbd5a' }}
          isMobile={isMobile}
        >
          <BannerSlider
            banner={bannerUrl}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            height={isMobile ? 300 : 500}
            showDesc
            onClick={({ realIndex }) => onClick()}
          />
        </StyledMainBanner>
      )}
      {isMobile && (
        <StyledMainBannerMobile>
          <div className="banner-icons">
            <div className="banner-icons-wrapper">
              <div
                className="banner-icons-wrapper-icon left"
                onClick={() => onClickSocial('github')}
              />
              <div
                className="banner-icons-wrapper-icon right"
                onClick={() => onClickSocial('instagram')}
              />
            </div>
          </div>
          <BannerSlider
            banner={bannerUrl}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            height={250}
            pagination={false}
            isMobile={isMobile}
            onClick={({ realIndex }) => onClick()}
          />
        </StyledMainBannerMobile>
      )}
    </>
  );
};
