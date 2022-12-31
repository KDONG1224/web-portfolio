// base
import { ImageProps } from 'next/image';
import React from 'react';

// style
import { StyledBlurImage } from './style';

interface BlurImageProps extends ImageProps {}

export const BlurImage: React.FC<BlurImageProps> = ({ ...props }) => {
  return (
    <StyledBlurImage
      {...props}
      placeholder="blur"
      // blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
    />
  );
};
