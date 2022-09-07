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

    &.mobile {
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
      white-space: nowrap;
      text-align: center;
      color: #fff;
      width: 94%;
      border-radius: 5px;
      z-index: 2;
      padding: 10px 0;
    }

    &.desc1 {
      background-color: #000b1d;
    }
    &.desc2 {
      background-color: #ff7b00;
    }
    &.desc3 {
      background-color: #746eaf;
    }
    &.desc4 {
      background-color: #f7df1e;
    }
    &.desc5 {
      background-color: #f0f0f0;
    }
    &.desc6 {
      background-color: #cc4d58;
    }
  }
`;
