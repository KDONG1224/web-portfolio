// base
import React from 'react';

// style
import { StyledMobileHeader, StyledHeaderRight } from './style';

// libraries
import { NavBar } from 'antd-mobile';
import { stack as Menu } from 'react-burger-menu';
import { useRouter } from 'next/router';
import { ROUTE_ROOT } from 'const/route';
import { useScroll } from 'hooks';

interface MobileHeaderProps {
  scrollY: number;
}

const HeaderRight = () => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <StyledHeaderRight id="outer-container">
      <Menu
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right
        // disableOverlayClick
      >
        <div id="home" className="menu-item">
          <div className="home-icon navi-icon" />
        </div>
        <div id="about" className="menu-item">
          <div className="html-icon navi-icon" />
        </div>
        <div id="contact" className="menu-item">
          <div className="javascript-icon navi-icon" />
        </div>
        <div
          id="setting"
          className="menu-item--small"
          onClick={() => console.log('HeaderRight')}
        >
          <div className="figma-icon navi-icon" />
        </div>
      </Menu>
    </StyledHeaderRight>
  );
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({ scrollY }) => {
  const router = useRouter();
  const pathname = router.pathname === ROUTE_ROOT ? false : true;

  console.log(scrollY);

  return (
    <StyledMobileHeader
      className={`mainLayout-header-bottom-searchbar ${
        scrollY > 100 && 'hide'
      }`}
    >
      <NavBar
        // back="返回"
        backArrow={pathname}
        onBack={() => console.log('back')}
        right={<HeaderRight />}
      >
        KDONG
      </NavBar>
    </StyledMobileHeader>
  );
};
