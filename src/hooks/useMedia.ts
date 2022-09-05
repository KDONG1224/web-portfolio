// base
import { useCallback, useEffect, useState } from 'react';

// react-responsive
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPc, setIsPc] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const pc = useMediaQuery({
    query: '(min-width:1024px)'
  });
  const tablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)'
  });
  const mobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleFront = useCallback(() => {
    if (pc) return setIsPc(true);
    if (tablet) return setIsTablet(true);
    if (mobile) return setIsMobile(true);
  }, [mobile, pc, tablet]);

  useEffect(() => {
    handleFront();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pc, tablet, mobile]);

  return {
    isMobile,
    isPc,
    isTablet
  };
};
