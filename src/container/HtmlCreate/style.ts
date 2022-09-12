// style
import Search from 'antd/lib/input/Search';
import styled from 'styled-components';

// libraries

// const
import { browserIcons } from 'const';

export const StyledHtmlCreate = styled.div`
  width: 100%;
  .ant-input {
    /* height: 100% !important; */
    min-height: 1px;
    height: 50px !important;
  }

  .ant-form-item {
    margin-bottom: 0px;
  }

  .ant-input:placeholder-shown {
    font-size: 10px;
  }

  .form-add-btn {
    width: 15%;
    position: absolute;
    right: 65px;
    bottom: 115px;
  }

  .dynamic-delete-button {
    position: relative;
    top: 4px;
    margin: 0 8px;
    color: #999;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .html-icon {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .icon-select {
    text-align: center;
  }

  .chrom-icon {
    background-image: url(${browserIcons.CHROME_ICON});
  }
  .firefox-icon {
    background-image: url(${browserIcons.FIREFOX_ICON});
  }
  .safari-icon {
    background-image: url(${browserIcons.SAFARI_ICON});
  }
  .opera-icon {
    background-image: url(${browserIcons.OPERA_ICON});
  }
  .whale-icon {
    background-image: url(${browserIcons.WHALE_ICON});
  }
  .explorer8-icon {
    background-image: url(${browserIcons.EXPLORER8_ICON});
  }
  .explorer9-icon {
    background-image: url(${browserIcons.EXPLORER9_ICON});
  }
  .explorer10-icon {
    background-image: url(${browserIcons.EXPLORER10_ICON});
  }
  .explorer11-icon {
    background-image: url(${browserIcons.EXPLORER11_ICON});
  }
  .edge-icon {
    background-image: url(${browserIcons.EDGE_ICON});
  }
  .android-icon {
    background-size: contain;
    background-image: url(${browserIcons.ANDROID_ICON});
  }
  .apple-icon {
    background-size: contain;
    background-image: url(${browserIcons.APPLE_ICON});
  }
`;

export const PrefixStyled = styled.div`
  color: #1e1e1e;
  /* font-size: 1.6rem; */
  min-width: 80px;
`;

export const StyledInputSearch = styled(Search)`
  & .ant-input-wrapper {
    & input {
      /* min-width: 26.5rem; */
      min-width: 255px;
      border: 1px solid #aaaab6;
      border-radius: 0.4rem !important;
    }

    & .ant-input-group-addon {
      left: 0.7rem !important;
      /* height: 4.6rem; */
      height: 100% !important;

      .ant-input-search-button {
        height: 50px !important;
      }

      & button {
        border-radius: 0.4rem !important;
        height: 100%;
        color: white;
      }
    }
  }
`;