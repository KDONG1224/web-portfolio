import styled from 'styled-components';
import { socialIcons } from 'consts';

interface StyledMainBannerProps {
  ismobile: boolean;
}

export const StyledMainBanner = styled.div<StyledMainBannerProps>`
  width: 100%;
  height: ${(props) => (props.ismobile ? '300px' : '500px')};
  margin-bottom: 50px;
  border-radius: 30px;
  position: relative;

  > div {
    border-radius: 30px;
  }

  .swiper {
    border-radius: 30px;
  }

  .swiper-slide {
    border-radius: 30px;

    .banner-swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
      }

      ${(props) =>
        props.ismobile &&
        `.banner-swiper-slide-desc { font-size: 2rem; bottom: 20px; right: 20px; }`}
    }
  }

  ${(props) =>
    props.ismobile &&
    `
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  `}
`;

export const StyledMainBannerMobile = styled.div`
  width: 100%;
  position: relative;
  /* overflow: hidden; */

  .swiper-slide-desc {
    overflow: visible !important;
  }

  .banner-swiper-slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }
`;
