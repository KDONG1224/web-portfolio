import styled from 'styled-components';

export const StyledMainBanner = styled.div`
  width: 100%;
  height: 500px;
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
        object-fit: cover;
        vertical-align: middle;
      }
    }
  }
`;
