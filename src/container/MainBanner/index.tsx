// base
import React from 'react';

// components
import { BannerSlider } from 'components';

// const
import { mainBanner } from 'const';

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
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>'
    },
    {
      url: mainBanner.BANNER_02,
      desc: '<div class="text-white">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>'
    },
    {
      url: mainBanner.BANNER_03,
      desc: '<div class="text-white">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>'
    },
    {
      url: mainBanner.BANNER_04,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>'
    },
    {
      url: mainBanner.BANNER_05,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>'
    },
    {
      url: mainBanner.BANNER_06,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>'
    }
  ];

  const onClick = () => {
    console.log('banner Click');
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
            onClick={({ realIndex }) => {
              console.log('realIndex : ', realIndex);
              onClick();
            }}
          />
        </StyledMainBanner>
      )}
      {isMobile && (
        <StyledMainBannerMobile>
          <BannerSlider
            banner={bannerUrl}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            height={430}
            pagination={false}
            isMobile={isMobile}
            onClick={({ realIndex }) => onClick()}
          />
        </StyledMainBannerMobile>
      )}
    </>
  );
};
