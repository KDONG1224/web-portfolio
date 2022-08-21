import styled from 'styled-components';

export const StyledMainLayout = styled.div`
  .ant-layout-sider {
    height: 100vh;
  }

  .layout-sider-row {
    height: 100%;
    position: relative;
    margin-left: 0;
    margin-right: 0;
  }

  .layout-sider-col {
    padding: 0 1.2rem;
  }

  .layout-sider-thumb {
    padding: 1.7rem 0 1rem;

    .layout-sider-title {
      margin-top: 10px;
      text-align: center;

      &.active {
        font-size: 0.5rem;
      }
    }

    &-box {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;

      &.active {
        width: 50px;
        height: 50px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  height: 100%;

  .logo-text {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--primary-color);
  }

  .btn-logout {
    padding: 0 2rem;
    height: 3.7rem;
    line-height: 3.7rem;
    font-size: 1.4rem;
    vertical-align: middle;
  }

  & .ant-layout-header {
    height: 5.4rem;
    padding: 0 2.8rem;
    box-shadow: 0px 0.4rem 0.4rem rgba(41, 41, 51, 0.06);
    z-index: 999;
    background-color: #20212d;
    line-height: 5.4rem;
  }

  & .ant-layout {
    height: 100%;
    background: #f2f3f6;
  }

  & .ant-layout-content {
    /* min-width: 80rem; */
    background-color: #f2f3f6;
    overflow: scroll;
    overflow-x: hidden;
    height: 100%;
  }

  & .ant-menu-submenu-title {
    height: 5rem;
    line-height: 5rem;
    padding-left: 2.4rem !important;
    padding-right: 3.4rem !important;
  }

  .side-layout-background.side_collapsed {
    & .ant-collapse-content-box {
      padding: 0 !important;
    }

    & .ant-menu-submenu.ant-menu-submenu-vertical {
      text-align: center;
      padding-bottom: 15px;
    }

    & .ant-menu-submenu-title {
      height: 2rem;
      line-height: 5rem;
      padding: 0 calc(50% - 2rem / 2) !important;
    }
  }

  .ant-menu-title-content {
    display: flex;
    align-items: center;

    .ant-space {
      gap: 15px !important;
    }
  }

  & .ant-layout-sider {
    background-color: #fff;
    overflow: scroll;
    transition: none;

    & .ant-menu-sub.ant-menu-inline {
      background-color: #fff;
    }

    & .ant-collapse {
      background: #fff;
      border: none;

      & .ant-collapse-header {
        font-size: 1.9rem;
        font-weight: 700;
        padding: 2rem;

        background-size: 1.6rem;
        background-repeat: no-repeat;
        background-position: 21rem 3rem;

        & .ant-collapse-arrow {
          & svg {
            display: none;
          }
        }
      }

      & .ant-collapse-content-box {
        padding: 1.6rem;
      }

      & .ant-collapse-item-active .ant-collapse-header {
        background-position: 21rem 3.6rem;
      }

      & .ant-collapse-content {
        border-top: none;
      }

      & .ant-collapse-item {
        border-bottom: 1px solid #e0e0e1;
      }
    }

    & .main-nav__menu-title {
      font-size: 0.9rem;
      font-weight: 500;
      display: block;
    }

    & .ant-menu-item {
      font-size: 1rem;
      font-weight: normal;
      line-height: 4rem;
      height: 4rem;
      /* padding-left: 4.8rem !important; */
    }

    & .ant-menu-submenu-title {
      height: 5rem;
      line-height: 5rem;
      padding-left: 2.4rem;
    }

    & .ant-menu-submenu-open {
      & .ant-menu-submenu-title {
        background-color: var(--primary-color);
        color: #fff;
        font-weight: 700 !important;
        border-radius: 0.4rem;
        align-items: flex-start;
      }
    }
  }

  & .ant-menu.ant-menu-inline-collapsed {
    & .ant-menu-submenu {
      & .ant-menu-submenu-title {
        padding: 0;
      }
    }
  }

  & .ant-layout-sider-children {
    position: relative;
    text-align: left;
    padding-top: 2rem;
    box-sizing: border-box;
    /* padding-right: 2rem; */
    transition: none;
    overflow-x: hidden;

    & .ant-layout-footer {
      background-color: #fff;
      position: relative;
      bottom: 0;
      font-size: 1.4rem;
      padding: 2.4rem 5rem;
    }

    & .main-nav {
      border-right: none;
    }
  }

  .ant-menu-submenu-open.ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before {
    background: #fff;
  }

  .ant-menu-submenu-open.ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after {
    background: #fff;
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover .main-nav__menu-title {
    font-weight: 700 !important;
  }
  .header_right_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navi-toggle {
    width: 1.4rem;
    height: 5.8rem;
    background-position: center;
    /* background-image: url(../../assets/icon/naviToggle.svg); */
    background-image: url('https://dev-commerce-admin.esavezone.co.kr/static/media/naviToggle.e0358fb9.svg');
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-size: contain;
    background-repeat: no-repeat;
    cursor: grab;
  }
`;
