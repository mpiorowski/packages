export const isMediaQueryLg = (window: Window) =>
  window.matchMedia('(min-width: 1024px)').matches;
export const isMediaQueryMd = (window: Window) =>
  window.matchMedia('(min-width: 768px)').matches;
export const isMediaQuerySm = (window: Window) =>
  window.matchMedia('(min-width: 640px)').matches;
