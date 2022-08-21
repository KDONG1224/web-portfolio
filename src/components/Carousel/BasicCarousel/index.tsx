// base
import React from 'react';

// library
import { Carousel, CarouselProps } from 'antd';

// style
import { StyleBasicCarousel, StyleBasicCarouselSlide } from './style';

interface CarouselData {
  url: string;
  title?: string;
}

interface BasicCarouselProps extends CarouselProps {
  data: CarouselData[];
  height?: number;
}

export const BasicCarousel: React.FC<BasicCarouselProps> = ({
  data,
  height,
  ...rest
}) => {
  return (
    <StyleBasicCarousel>
      <Carousel dots draggable {...rest}>
        {data.map((slideData, slideIdx) => (
          <StyleBasicCarouselSlide key={slideIdx} height={height}>
            <div>
              <img src={slideData.url} alt={slideData.title} />
            </div>
          </StyleBasicCarouselSlide>
        ))}
      </Carousel>
    </StyleBasicCarousel>
  );
};
