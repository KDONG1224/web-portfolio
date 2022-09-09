import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.ant-layout-content') as Element;

    const listener = (e: any) => {
      setScrollY(e.target.scrollTop);
    };

    (container || document.body).addEventListener('scroll', listener);
    return () => {
      (container || document.body).removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY
  };
};
