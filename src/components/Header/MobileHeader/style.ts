import { menuIcons } from 'consts';
import styled from 'styled-components';

export const StyledMobileHeader = styled.div`
  height: 120px;
  position: fixed;
  width: 100%;
  z-index: 9999;

  .adm-nav-bar {
    height: 100%;
    padding: 0;

    .adm-nav-bar-title {
      height: 100%;

      > span {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }

    .adm-nav-bar-right {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      span {
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  /* .anticon svg */
`;

export const StyledHeaderRight = styled.div`
  .ant-menu {
    > li {
      /* height: 100px !important; */
    }
  }

  .ant-menu-submenu-title,
  .ant-menu-inline > .ant-menu-item {
    height: 100px !important;
    line-height: 100px !important;
  }
  .ant-menu-submenu-title {
    /* height: 100px !important; */
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: 32px;
  }

  .ant-menu-item .ant-menu-item-icon,
  .ant-menu-submenu-title .ant-menu-item-icon {
    width: 50px;
    height: 50px;
  }

  .ant-menu-item .ant-menu-item-icon + span,
  .ant-menu-submenu-title .ant-menu-item-icon + span {
    margin-left: 20px;
  }

  .ant-menu-submenu-inline .ant-menu-submenu-arrow::before {
    transform: rotate(-45deg) translateX(2.5px) scale(2.5);
  }
  .ant-menu-submenu-inline .ant-menu-submenu-arrow::after {
    transform: rotate(45deg) translateX(-2.5px) scale(2.5);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline
    > .ant-menu-submenu-title
    > .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateX(-2.5px) scale(2.5);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline
    > .ant-menu-submenu-title
    > .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateX(2.5px) scale(2.5);
  }

  .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-arrow::after {
    left: -10px;
  }

  .bm-burger-button {
    position: fixed;
    width: 50px;
    height: 44px;
    right: 40px;
    top: 36px;
  }

  .bm-burger-bars {
    background: #373a47;
    height: 13% !important;
  }

  .bm-burger-bars-hover {
    background: #a90000;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #000;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    width: 400px !important;
  }

  .bm-menu {
    width: 400px;
    background: #fff;
    padding: 50px 0px 36px;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    /* color: #b8b7ad;
    padding: 0.8em; */

    /* display: grid;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(4, 1fr); */
  }

  .bm-item {
    /* display: inline-block; */
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
  }

  .bm-item {
    /* display: inline-block;

    color: #d1d1d1;
    margin-bottom: 20px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;

    display: flex !important;
    align-items: center;
    justify-content: center; */
  }

  .bm-item:hover {
    /* color: #ffffff; */
  }

  .navi-icon {
    width: 50px;
    height: 50px;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid red;
    border-radius: 10px;
  }

  .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  }

  .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
  }

  .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  }
`;
