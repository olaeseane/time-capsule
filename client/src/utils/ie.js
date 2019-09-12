let uA = window.navigator.userAgent;

export const isIE =
  /msie\s|trident\/|edge\//i.test(uA) &&
  !!(
    document.uniqueID ||
    document.documentMode ||
    window.ActiveXObject ||
    window.MSInputMethodContext
  );

export const checkVersion = (isIE && +/(edge\/|rv:|msie\s)([\d.]+)/i.exec(uA)[2]) || NaN;
