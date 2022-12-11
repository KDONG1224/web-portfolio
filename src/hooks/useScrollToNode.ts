import { useEffect, useRef } from 'react';

export const useScrollToNode = (className: string) => {
  const element = useRef<HTMLElement>();
  const header = useRef<HTMLElement>();

  useEffect(() => {
    const targetNode = document.querySelector(className) as HTMLElement;
    const headerNode = document.querySelector(
      '.ant-layout-header'
    ) as HTMLElement;

    if (targetNode) {
      element.current = targetNode;
    }

    if (headerNode) {
      header.current = headerNode;
    }
  }, [className]);

  const scrollToAction = () => {
    let headerHeight = header.current ? header.current.clientHeight : 0;
    if (element.current) {
      console.log(element.current.offsetTop - headerHeight);
      document
        .querySelector('.ant-layout-content')
        ?.scrollTo(0, element.current.offsetTop - headerHeight);
    }
  };

  return {
    scrollTo: scrollToAction
  };
};
