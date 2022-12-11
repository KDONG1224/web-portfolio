// base
import React, { useState } from 'react';

// style
import { StyledMobileHeader, StyledHeaderRight } from './style';

// libraries
import { NavBar } from 'antd-mobile';
import { stack as Hanmber } from 'react-burger-menu';
import { useRouter } from 'next/router';
import {
  ROUTE_ABOUT,
  ROUTE_ALCHOL_CUP,
  ROUTE_ALGORITHM,
  ROUTE_FIGMA,
  ROUTE_NOTION,
  ROUTE_REFERNCE,
  ROUTE_REFERNCE_JS,
  ROUTE_ROOT
} from 'consts/route';
import { getMenuItem, MenuItem } from 'utils';
import { Menu } from 'antd';

interface MobileHeaderProps {}

const HeaderRight = () => {
  const router = useRouter();

  const [activeKey, setActiveKey] = useState<string>('');
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [openKeys, setOpenkeys] = useState<string[] | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (key: string) => {
    setActiveKey(key);

    router.push(`${ROUTE_ROOT}${key}`);

    setIsOpen(false);

    return;
  };

  const MenuItems: MenuItem[] = [
    getMenuItem('홈', ROUTE_ROOT, <div className="home-icon navi-icon" />),
    getMenuItem(
      '어바웃',
      ROUTE_ABOUT,
      <div className="about-icon navi-icon" />
    ),
    getMenuItem(
      '레퍼런스',
      'reference',
      <div className="reference-icon navi-icon" />,
      [
        getMenuItem(
          '레퍼런스 목록',
          ROUTE_REFERNCE,
          <div className="html-icon navi-icon" />
        ),
        getMenuItem(
          'JAVASCRIPT',
          ROUTE_REFERNCE_JS,
          <div className="javascript-icon navi-icon" />
        )
      ]
    ),
    getMenuItem(
      '알고리즘',
      'algorithm',
      <div className="javascript-icon navi-icon" />,
      [
        getMenuItem(
          '알고리즘 목록',
          ROUTE_ALGORITHM,
          <div className="algorithm-icon navi-icon" />
        )
      ]
    ),
    getMenuItem(
      '피그마',
      ROUTE_FIGMA,
      <div className="figma-icon navi-icon" />
    ),
    getMenuItem(
      '노션',
      ROUTE_NOTION,
      <div className="notion-icon navi-icon" />
    ),
    getMenuItem(
      '토이프로젝트',
      ROUTE_ALCHOL_CUP,
      <div className="alchol-icon navi-icon" />
    )
  ];

  return (
    <StyledHeaderRight id="outer-container">
      <Hanmber
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right
        onOpen={() => setIsOpen(true)}
        isOpen={isOpen}
      >
        <Menu
          mode="inline"
          items={MenuItems}
          onClick={({ key }) => onClick(key)}
          onOpenChange={(openKeys) => console.log(openKeys)}
          activeKey={activeKey}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          defaultSelectedKeys={['home']}
        />
      </Hanmber>
    </StyledHeaderRight>
  );
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({}) => {
  const router = useRouter();
  const pathname = router.pathname === ROUTE_ROOT ? false : true;

  return (
    <StyledMobileHeader
      style={{
        background: pathname ? '#fff' : 'transparent'
      }}
    >
      <NavBar
        backArrow={false}
        onBack={() => console.log('back')}
        right={<HeaderRight />}
      >
        <span
          onClick={() => router.push(ROUTE_ROOT)}
          style={{
            fontSize: 30,
            color: '#000'
          }}
        >
          KDONG
        </span>
      </NavBar>
    </StyledMobileHeader>
  );
};
