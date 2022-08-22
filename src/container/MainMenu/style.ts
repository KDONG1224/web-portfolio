import styled from 'styled-components';
import { Menu } from 'antd';
import { menuIcons } from 'const/images';

export const StyledMainMenu = styled(Menu)`
  .main-menu {
    &-search {
      padding: 20px;
      color: #fff;
      text-align: center;

      .ant-input {
        border: 1px solid #f7f7f7;

        &::placeholder {
          font-size: 0.8rem;
        }
      }

      .ant-input-group-addon {
        button {
          background: black;
        }
      }
    }
  }
  .ant-divider-horizontal {
    margin: 10px 0 20px;
    border-top: 10px solid rgba(0, 0, 0, 0.06);
  }

  .navi-icon {
    width: 2rem;
    height: 2rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .ant-layout-sider {
    .ant-menu-submenu-vertical.ant-menu-submenu-active {
      & .ant-menu-submenu-title {
        background-color: var(--primary-color);
        color: #fff;
        font-weight: 700 !important;
        border-radius: 0.4rem;
      }
    }
  }

  .ant-menu-submenu-popup {
    & .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: transparent;

      & a {
        color: white;
        font-weight: 700;
      }
    }
  }

  // 홈 아이콘
  .ant-menu-submenu-title .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  }

  .ant-menu-submenu-active .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  }

  .ant-menu-submenu-open .home-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .home-icon {
    background-image: url(${menuIcons.HOME_ICON});
  }

  // 어바웃 아이콘
  .ant-menu-submenu-title .about-icon {
    /* background-image: url(../../assets/icon/store_default.svg); */
  }

  .ant-menu-submenu-active .about-icon {
    /* background-image: url(../../assets/icon/store_hover.svg); */
  }

  .ant-menu-submenu-open .about-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .about-icon {
    /* background-image: url(../../assets/icon/store_active.svg); */
  }

  // html icons
  .ant-menu-submenu-title .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
  }

  .ant-menu-submenu-active .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
  }

  .ant-menu-submenu-open .html-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .html-icon {
    background-image: url(${menuIcons.HTML_ICON});
    /* background-image: url(../../assets/icon/product_active.svg); */
  }

  // css icons
  .ant-menu-submenu-title .css-icon {
    background-image: url(${menuIcons.CSS_ICON});
  }

  .ant-menu-submenu-active .css-icon {
    background-image: url(${menuIcons.CSS_ICON});
  }

  .ant-menu-submenu-open .css-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .css-icon {
    background-image: url(${menuIcons.CSS_ICON});
  }

  // javscript icons
  .ant-menu-submenu-title .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  .ant-menu-submenu-active .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  .ant-menu-submenu-open .javascript-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .javascript-icon {
    background-image: url(${menuIcons.JS_ICON});
  }

  // algorithm icons
  .ant-menu-submenu-title .algorithm-icon {
    background-image: url(${menuIcons.ALGORITHM_ICON});
  }

  .ant-menu-submenu-active .algorithm-icon {
    background-image: url(${menuIcons.ALGORITHM_ICON});
  }

  .ant-menu-submenu-open .algorithm-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .algorithm-icon {
    background-image: url(${menuIcons.ALGORITHM_ICON});
  }

  // react icons
  .ant-menu-submenu-title .notion-icon {
    background-image: url(${menuIcons.NOTION_ICON});
  }

  .ant-menu-submenu-active .notion-icon {
    background-image: url(${menuIcons.NOTION_ICON});
  }

  .ant-menu-submenu-open .notion-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .notion-icon {
    background-image: url(${menuIcons.NOTION_ICON});
  }

  // figma icons
  .ant-menu-submenu-title .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  }

  .ant-menu-submenu-active .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  }

  .ant-menu-submenu-open .figma-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .figma-icon {
    background-image: url(${menuIcons.FIGMA_ICON});
  }

  // alchol
  .ant-menu-submenu-title .alchol-icon {
    background-image: url(${menuIcons.ALCHOL_ICON});
  }

  .ant-menu-submenu-active .alchol-icon {
    background-image: url(${menuIcons.ALCHOL_ICON});
  }

  .ant-menu-submenu-open .alchol-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .alchol-icon {
    background-image: url(${menuIcons.ALCHOL_ICON});
  }

  .ant-menu-submenu-title .statistics-icon {
    /* background-image: url(../../assets/icon/statistics_default.svg); */
  }

  .ant-menu-submenu-active .statistics-icon {
    /* background-image: url(../../assets/icon/statistics_hover.svg); */
  }

  .ant-menu-submenu-open .statistics-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .statistics-icon {
    /* background-image: url(../../assets/icon/statistics_active.svg); */
  }

  .ant-menu-submenu-title .live-icon {
    /* background-image: url(../../assets/icon/live_default.svg); */
  }

  .ant-menu-submenu-active .live-icon {
    /* background-image: url(../../assets/icon/live_hover.svg); */
  }

  .ant-menu-submenu-open .live-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .live-icon {
    /* background-image: url(../../assets/icon/live_active.svg); */
  }

  .ant-menu-submenu-title .langset-icon {
    /* background-image: url(../../assets/icon/langset_default.svg); */
  }

  .ant-menu-submenu-active .langset-icon {
    /* background-image: url(../../assets/icon/langset_hover.svg); */
  }

  .ant-menu-submenu-open .langset-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .langset-icon {
    /* background-image: url(../../assets/icon/langset_active.svg); */
  }

  .ant-menu-submenu-title .ssgUser-icon {
    /* background-image: url(../../assets/icon/ssgUser_default.svg); */
  }

  .ant-menu-submenu-active .ssgUser-icon {
    /* background-image: url(../../assets/icon/ssgUser_hover.svg); */
  }

  .ant-menu-submenu-open .ssgUser-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .ssgUser-icon {
    /* background-image: url(../../assets/icon/ssgUser_active.svg); */
  }

  .ant-menu-submenu-title .ssgFaq-icon {
    /* background-image: url(../../assets/icon/ssgFaq_default.svg); */
  }

  .ant-menu-submenu-active .ssgFaq-icon {
    /* background-image: url(../../assets/icon/ssgFaq_hover.svg); */
  }

  .ant-menu-submenu-open .ssgFaq-icon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .ssgFaq-icon {
    /* background-image: url(../../assets/icon/ssgFaq_active.svg); */
  }

  .ant-menu-submenu-title .storeicon {
    /* background-image: url(../../assets/icon/store_default.svg); */
  }

  .ant-menu-submenu-active .storeicon {
    /* background-image: url(../../assets/icon/store_hover.svg); */
  }

  .ant-menu-submenu-open .storeicon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .storeicon {
    /* background-image: url(../../assets/icon/store_active.svg); */
  }

  .ant-menu-submenu-title .contenticon {
    /* background-image: url(../../assets/icon/content_default.svg); */
  }

  .ant-menu-submenu-active .contenticon {
    /* background-image: url(../../assets/icon/content_hover.svg); */
  }

  .ant-menu-submenu-open .contenticon,
  .ant-menu-submenu-vertical.ant-menu-submenu-active .contenticon {
    /* background-image: url(../../assets/icon/content_active.svg); */
  }
`;
