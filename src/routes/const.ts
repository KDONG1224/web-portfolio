// root
export const ROUTE_ROOT = '/';

// about
export const ROUTE_ABOUT = '/about';
export const ROUTE_ABOUT_INFO = `${ROUTE_ABOUT}/info`;

// html
export const ROUTE_HTML = '/html';
export const ROUTE_HTML_INFO = `${ROUTE_HTML}/info`;
export const ROUTE_HTML_DETAIL = `${ROUTE_HTML_INFO}/:id`;
export const ROUTE_HTML_DETAIL_WITH_ID = (id: string) =>
  `${ROUTE_HTML_INFO}/${id}`;

// css
export const ROUTE_CSS = '/css';
export const ROUTE_CSS_INFO = `${ROUTE_CSS}/info`;
export const ROUTE_CSS_DETAIL = `${ROUTE_CSS_INFO}/:id`;
export const ROUTE_CSS_DETAIL_WITH_ID = (id: string) =>
  `${ROUTE_CSS_INFO}/${id}`;

// javascript
export const ROUTE_JS = '/javascript';
export const ROUTE_JS_INFO = `${ROUTE_JS}/info`;

// algorithm
export const ROUTE_ALGORITHM = '/algorithm';
export const ROUTE_ALGORITHM_INFO = `${ROUTE_ALGORITHM}/info`;
export const ROUTE_ALGORITHM_DETAIL = `${ROUTE_ALGORITHM_INFO}/:id`;
export const ROUTE_ALGORITHM_DETAIL_WITH_ID = (id: string) =>
  `${ROUTE_ALGORITHM_INFO}/${id}`;

// react
export const ROUTE_REACT = '/react';
export const ROUTE_REACT_INFO = `${ROUTE_REACT}/info`;

// figma
export const ROUTE_FIGMA = '/figma';
export const ROUTE_FIGMA_INFO = `${ROUTE_FIGMA}/info`;

// notion
export const ROUTE_NOTION = '/notion';
export const ROUTE_NOTION_INFO = `${ROUTE_NOTION}/info`;
