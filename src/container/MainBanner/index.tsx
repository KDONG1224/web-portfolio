// base
import React from 'react';

// components
import { BannerSlider } from 'components';

// const
import { mainBanner } from 'const';

// style
import { StyledMainBanner } from './style';

interface MainBannerProps {}

export const MainBanner: React.FC<MainBannerProps> = ({}) => {
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
    <StyledMainBanner style={{ backgroundColor: '#efbd5a' }}>
      <BannerSlider
        banner={bannerUrl}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        height={500}
        showDesc
        onClick={({ realIndex }) => {
          console.log('realIndex : ', realIndex);
          onClick();
        }}
      />
    </StyledMainBanner>
  );
};
