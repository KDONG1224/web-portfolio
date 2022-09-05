import { menuIcons } from 'const';
import styled from 'styled-components';

export const StyledMobileHeader = styled.div`
  height: 100%;
  .adm-nav-bar {
    height: 100%;

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
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 24px;
    /* left: 36px; */
    /* top: 36px; */
    right: 20px;
    top: 15px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
    height: 13% !important;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #000;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    width: 100px !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #f9e4e4;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    /* color: #b8b7ad;
    padding: 0.8em; */

    /* display: grid;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(4, 1fr); */
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;

    color: #d1d1d1;
    margin-bottom: 20px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;

    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .bm-item:hover {
    color: #ffffff;
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
