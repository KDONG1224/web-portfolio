export const isPc = /win16|win32|win64|mac|macintel/i.test(
  typeof window === 'object' ? window.navigator.userAgent : ''
);

export const isMobile =
  /iPhone|iPad|iPod|Samsung|lgTel|blackberry|symbian|Android/i.test(
    typeof window === 'object' ? window.navigator.userAgent : ''
  );
export const isSafari = /Safari/i.test(
  typeof window === 'object' ? window.navigator.userAgent : ''
);

export const isAppAndroid =
  typeof window === 'object'
    ? /Android/i.test(window.navigator.userAgent) && window.oasis
    : '';

export const isAndroid = /Android/i.test(
  typeof window === 'object' ? window.navigator.userAgent : ''
);

export const isAppIos =
  typeof window === 'object'
    ? /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      window.webkit &&
      window.webkit.messageHandlers.oasis
    : '';

export const isIos = /iPhone|iPad|iPod/i.test(
  typeof window === 'object' ? navigator.userAgent : ''
);
