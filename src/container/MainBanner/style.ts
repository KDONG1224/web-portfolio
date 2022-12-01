import styled from 'styled-components';
import { socialIcons } from 'consts';

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

export const StyledMainBannerMobile = styled.div`
  width: 100%;
  height: 300px;
  /* margin-bottom: 50px; */
  /* border-radius: 30px; */
  position: relative;
  overflow: hidden;

  .banner-icons {
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 2;
    top: 30px;

    &-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-icon {
        width: 50px;
        height: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        &.left {
          margin-left: 20px;
          background-image: url(${socialIcons.GITHUB_ICON});
        }

        &.right {
          margin-right: 20px;
          background-image: url(${socialIcons.INSTAGRAM_ICON});
        }
      }
    }
  }

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
