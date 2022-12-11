// root
export const ROUTE_ROOT = '/';

// about
export const ROUTE_ABOUT = '/about';
export const ROUTE_ABOUT_INFO = `${ROUTE_ABOUT}/info`;

// reference
export const ROUTE_REFERNCE = '/reference';
export const ROUTE_REFERNCE_JS = `${ROUTE_REFERNCE}/javascript`;
export const ROUTE_REFERNCE_JS_DETAIL = `${ROUTE_REFERNCE_JS}/detail`;
export const ROUTE_REFERNCE_DETAIL = `${ROUTE_REFERNCE}/detail`;
export const ROUTE_REFERNCE_EDIT = `${ROUTE_REFERNCE}/edit`;

export const ROUTE_REFERNCE_DETAIL_JS_WITH_ID = (id: string) =>
  `${ROUTE_REFERNCE_JS_DETAIL}/${id}`;
export const ROUTE_REFERNCE_DETAIL_WITH_ID = (id: string) =>
  `${ROUTE_REFERNCE_DETAIL}/${id}`;
export const ROUTE_REFERNCE_EDIT_WITH_ID = (id: string) =>
  `${ROUTE_REFERNCE_EDIT}/${id}`;

// algorithm
export const ROUTE_ALGORITHM = '/algorithm';
export const ROUTE_ALGORITHM_DETAIL = `${ROUTE_ALGORITHM}/detail`;
export const ROUTE_ALGORITHM_DETAIL_WITH_ID = (id: string) =>
  `${ROUTE_ALGORITHM_DETAIL}/${id}`;

// react
export const ROUTE_REACT = '/react';
export const ROUTE_REACT_INFO = `${ROUTE_REACT}/info`;

// figma
export const ROUTE_FIGMA = '/figma';
export const ROUTE_FIGMA_INFO = `${ROUTE_FIGMA}/info`;

// notion
export const ROUTE_NOTION = '/notion';
export const ROUTE_NOTION_INFO = `${ROUTE_NOTION}/info`;

// alcholcup
export const ROUTE_ALCHOL_CUP = '/alchol';
export const ROUTE_ALCHOL_CUP_INFO = `${ROUTE_ALCHOL_CUP}/info`;
export const ROUTE_ALCHOL_CUP_DETAIL = `${ROUTE_ALCHOL_CUP_INFO}/:id`;
export const ROUTE_ALCHOL_CUP_DETAIL_WITH_ID = (id: string) =>
  `${ROUTE_ALCHOL_CUP_INFO}/${id}`;
