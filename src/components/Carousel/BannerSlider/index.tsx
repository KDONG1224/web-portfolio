// base
import React from 'react';

// libraries
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Pagination, Scrollbar, Autoplay } from 'swiper';

// style
import { StyledBannerSwiper, StyledBannerSwiperSlider } from './style';

SwiperCore.use([Autoplay]);

interface BannerSliderProps extends SwiperProps {
  banner: {
    url?: string;
    desc?: string;
  }[];
  height?: number;
  showDesc?: boolean;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({
  banner,
  height,
  showDesc = false,
  onClick,
  ...rest
}) => {
  return (
    <StyledBannerSwiper>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        onClick={onClick}
        {...rest}
      >
        {banner.map((item, idx) => (
          <SwiperSlide key={idx}>
            <StyledBannerSwiperSlider
              className='banner-swiper-slide'
              height={height || 500}
              url={!height ? undefined : item.url}
            >
              <img src={item.url || ''} alt={`배너 ${idx}`} />
              {showDesc && (
                <div
                  className='banner-swiper-slide-desc'
                  dangerouslySetInnerHTML={{
                    __html: item.desc ? item.desc : ''
                  }}
                ></div>
              )}
            </StyledBannerSwiperSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBannerSwiper>
  );
};
