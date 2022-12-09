// base
import React, { useEffect, useState } from 'react';

// libraries
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  A11y,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  Controller
} from 'swiper';

// style
import { StyledBannerSwiper, StyledBannerSwiperSlider } from './style';

SwiperCore.use([Autoplay]);

interface BannerSliderProps extends SwiperProps {
  banner: {
    url?: string;
    desc?: string;
    mobile?: string;
  }[];
  height?: number;
  showDesc?: boolean;
  isMobile?: boolean;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({
  banner,
  height,
  showDesc = false,
  isMobile = false,
  onClick,
  ...rest
}) => {
  const [firstSwiper, setFirstSwiper] = useState<any>();
  const [secondSwiper, setSecondSwiper] = useState<any>();

  // useEffect(() => {
  //   firstSwiper.controller.control = secondSwiper;
  //   secondSwiper.controller.control = firstSwiper;
  // }, [isMobile])

  return (
    <StyledBannerSwiper>
      {!isMobile && (
        <Swiper
          modules={[Scrollbar, A11y, Pagination]}
          pagination={{ clickable: true }}
          onClick={onClick}
          {...rest}
        >
          {banner.map((item, idx) => (
            <SwiperSlide key={idx}>
              <StyledBannerSwiperSlider
                className="banner-swiper-slide"
                height={height || 500}
                url={!height ? undefined : item.url}
              >
                <img src={item.url || ''} alt={`배너 ${idx}`} />
                {showDesc && (
                  <div
                    className="banner-swiper-slide-desc"
                    dangerouslySetInnerHTML={{
                      __html: item.desc ? item.desc : ''
                    }}
                  ></div>
                )}
                {isMobile && (
                  <div
                    className="banner-swiper-slide-desc mobile"
                    dangerouslySetInnerHTML={{
                      __html: '안녕하세요! 동재의 포트폴리오'
                    }}
                  />
                )}
              </StyledBannerSwiperSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {isMobile && (
        <>
          <Swiper
            modules={[Controller, Scrollbar, A11y, EffectFade]}
            pagination={{ clickable: true }}
            onClick={onClick}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSwiper={(swiper) => setFirstSwiper(swiper)}
            controller={{ control: secondSwiper }}
            {...rest}
          >
            {banner.map((item, idx) => (
              <SwiperSlide key={idx}>
                <StyledBannerSwiperSlider
                  className="banner-swiper-slide"
                  height={height || 250}
                  url={!height ? undefined : item.url}
                >
                  <img src={item.url || ''} alt={`배너 ${idx}`} />
                </StyledBannerSwiperSlider>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Controller, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            loop={true}
            onClick={onClick}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            className="swiper-slide-desc"
          >
            {banner.map((item, idx) => (
              <SwiperSlide key={idx}>
                <StyledBannerSwiperSlider
                  className="banner-swiper-slide desc"
                  url={''}
                >
                  <div
                    className={`banner-swiper-slide-desc mobile desc${idx + 1}`}
                    dangerouslySetInnerHTML={{
                      __html: `${idx + 1} ${item.mobile}`
                    }}
                  />
                </StyledBannerSwiperSlider>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </StyledBannerSwiper>
  );
};
