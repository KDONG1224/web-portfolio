import styled from 'styled-components';

interface StyledBannerSwiperProps {
  height?: number;
}

interface StyledBannerSwiperSliderProps {
  height?: number;
  url?: string;
}

export const StyledBannerSwiper = styled.div<StyledBannerSwiperProps>`
  .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 15px)
    );
    height: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 15px)
    );
    border-radius: 50%;
  }
`;

export const StyledBannerSwiperSlider = styled.div<StyledBannerSwiperSliderProps>`
  position: relative;
  background-size: cover;
  background-image: ${({ url }) => (url ? `url(${url})` : 'none')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};

  .banner-swiper-slide-desc {
    position: absolute;
    bottom: 40px;
    right: 50px;
    font-family: 'GmarketSans-Bold';
    text-align: right;
    font-size: 4rem;
    line-height: 1.4;

    .text-black {
      color: #000;
    }

    .text-white {
      color: #fff;
    }
  }
`;
