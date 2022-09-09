// styled
import styled from 'styled-components';

// const
import { menuIcons } from 'const';

export const StyledMobileFooter = styled.div`
  height: 100%;
  background: #fff;
  border-top: 1px solid #afafaf;
  .adm-tab-bar {
    height: 100%;

    .adm-tab-bar-wrap {
      height: 100%;

      .adm-tab-bar-item {
        .adm-badge-wrapper {
          width: 100%;
          height: 100%;

          .adm-tab-bar-item-icon {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .navi-icon {
              width: 80%;
              height: 90%;
              background-size: contain;
              background-repeat: no-repeat;

              &.home-icon {
                background-image: url(${menuIcons.HOME_ICON});
              }
              &.about-icon {
                background-image: url(${menuIcons.ABOUT_ICON});
              }
              &.html-icon {
                background-image: url(${menuIcons.HTML_ICON});
              }
              &.alchol-icon {
                background-image: url(${menuIcons.ALCHOL_ICON});
              }
            }
          }
        }
      }
    }
  }
`;
