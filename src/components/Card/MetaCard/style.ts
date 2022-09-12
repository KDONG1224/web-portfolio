import styled from 'styled-components';

interface StyledMetaCardProps {
  isIcon?: boolean;
  iconBackground?: string;
  gap?: number;
}

export const StyledMetaCard = styled.div<StyledMetaCardProps>`
  position: relative;
  padding: 2rem 3.2rem;
  background: #ffffff;
  border: 1px solid #dde1e7;
  box-sizing: border-box;
  border-radius: 0.4rem;

  .ant-page-header-heading {
    align-items: center;
  }

  .logis-signed {
    padding: 0 1.2rem;
    margin-left: 0.6rem;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 500;
    background: #eaefff;
    border-radius: 0.4rem;
  }

  .ant-tag {
    /* margin-left: 0.6rem; */
    /* color: #78789d; */
    vertical-align: text-bottom;
  }

  .ant-avatar {
    display: ${(props) => (props.isIcon ? 'inline-block' : 'none')};
    background: ${(props) => props.iconBackground ?? 'transparent'};
    font-size: 0;
  }

  .ant-avatar > img {
    display: inline-block;
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  .metaCard-divider {
    margin: 1.2rem 0 0;
    padding: ${(props) =>
      props.gap ? `1.2rem 0 ${props.gap / 10}rem` : '1.2rem 0 0'};
  }

  .ant-pagination-item {
    border-color: transparent;

    & a {
      color: #ff4c01;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
`;
