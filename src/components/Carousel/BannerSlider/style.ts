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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      white-space: nowrap;
      text-align: center;
      color: #000;
      width: 96%;
      border-radius: 10px;
      z-index: 2;
      padding: 40px 0;
      filter: blur(-10px);
      line-height: 0;
      backdrop-filter: blur(10px);
      box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    }

    &.desc1 {
      background-color: #f3f3ff;
    }
    &.desc2 {
      background-color: #f3f3ff;
    }
    &.desc3 {
      background-color: #f3f3ff;
    }
    &.desc4 {
      background-color: #f3f3ff;
    }
    &.desc5 {
      background-color: #f3f3ff;
    }
    &.desc6 {
      background-color: #f3f3ff;
    }
  }
`;
