// base
import React from 'react';

// components
import { BannerSlider } from 'components';

// const
import { mainBanner, mobileMaimBanner } from 'consts';

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
      mobileUrl: mobileMaimBanner.MOBILE_BANNER_01,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '밥---값하는 프론트엔드 개발자 KDONG'
    },
    {
      url: mainBanner.BANNER_02,
      mobileUrl: mobileMaimBanner.MOBILE_BANNER_02,
      desc: '<div class="text-white">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '당신이 찾던 바로 그 개발자 KDONG'
    },
    {
      url: mainBanner.BANNER_03,
      mobileUrl: mobileMaimBanner.MOBILE_BANNER_03,
      desc: '<div class="text-white">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '개발자계의 4번 홈런 타자 KDONG'
    },
    {
      url: mainBanner.BANNER_04,
      mobileUrl: mobileMaimBanner.MOBILE_BANNER_04,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: "BTS 봉준호 손흥민 KDONG, Let's go~"
    },
    {
      url: mainBanner.BANNER_05,
      mobileUrl: mobileMaimBanner.MOBILE_BANNER_05,
      desc: '<div class="text-black">안녕하세요! <br /> 저는 밥값하는 프론트엔드</div>',
      mobile: '당신의 웹사이트를 책임질 KDONG'
    },
    {
      url: mainBanner.BANNER_06,
      mobileUrl: mobileMaimBanner.MOBILE_BANNER_06,
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
          <BannerSlider
            banner={bannerUrl}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            height={500}
            pagination={false}
            isMobile={isMobile}
            onClick={({ realIndex }) => onClick()}
          />
        </StyledMainBannerMobile>
      )}
    </>
  );
};

// 직원들의 창의성을 위해 다양한 위치에서 업무를 할 수 있게 수시로 자리를 변경하여 창의성을 지원합니다.

// 매일
