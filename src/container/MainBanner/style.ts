import styled from 'styled-components';

interface StyledMainBannerProps {
  isMobile: boolean;
}

export const StyledMainBanner = styled.div<StyledMainBannerProps>`
  width: 100%;
  height: ${(props) => (props.isMobile ? '300px' : '500px')};
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
        props.isMobile &&
        `.banner-swiper-slide-desc { font-size: 2rem; bottom: 20px; right: 20px; }`}
    }
  }

  ${(props) =>
    props.isMobile &&
    `
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  `}
`;
