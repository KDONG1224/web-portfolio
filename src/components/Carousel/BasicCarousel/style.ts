import styled from 'styled-components';

interface StyleBasicCarouselSlideProps {
  height?: number;
}

export const StyleBasicCarousel = styled.div`
  .slick-dots {
    bottom: 40px;
    margin: 0px;
    z-index: 1;

    li,
    &li.slick-active {
      height: 10px;
      width: 50px !important;
      margin: 0px;

      button {
        height: 8px;
        background: #666;

        &::before {
          content: '';
        }
      }
    }
  }
`;

export const StyleBasicCarouselSlide = styled.div<StyleBasicCarouselSlideProps>`
  overflow: hidden;
  > div {
    display: flex;
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
    align-items: center;
    justify-content: center;
  }
`;
