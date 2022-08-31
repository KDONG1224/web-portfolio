// base
import React, { ReactNode, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMainMenu } from './style';

// library
import { Divider, Menu, Space } from 'antd';
import { AppleOutlined } from '@ant-design/icons';

// const
import { menuNames, menus } from 'const';

// modules

import Search from 'antd/lib/input/Search';
import { useAppSelector } from 'modules/hooks';

interface MenuType {
  [key: string]: {
    icon: ReactNode;
    title: string;
  };
}

interface MainMenuProps {
  collapsed?: boolean;
}

const mainMenu: MenuType = {
  home: {
    icon: <div className="home-icon navi-icon" />,
    title: '홈'
  },
  about: {
    icon: <div className="about-icon navi-icon" />,
    title: '어바웃'
  },
  html: {
    icon: <div className="html-icon navi-icon" />,
    title: 'HTML'
  },
  css: {
    icon: <div className="css-icon navi-icon" />,
    title: 'CSS'
  },
  javascript: {
    icon: <div className="javascript-icon navi-icon" />,
    title: '자바스크립트'
  },
  algorithm: {
    icon: <div className="algorithm-icon navi-icon" />,
    title: '알고리즘'
  },
  figma: {
    icon: <div className="figma-icon navi-icon" />,
    title: '피그마'
  },
  notion: {
    icon: <div className="notion-icon navi-icon" />,
    title: '노션'
  },
  alchol: {
    icon: <div className="alchol-icon navi-icon" />,
    title: '알콜컵'
  }
};

export const MainMenu: React.FC<MainMenuProps> = ({ collapsed = false }) => {
  const { isSideMenuCollapsed } = useAppSelector((state) => state.ui);

  const [openKeys, setOpenkeys] = useState<string[] | undefined>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [activeKey, setActiveKey] = useState<string>('');

  const router = useRouter();

  const roots = useMemo(
    () =>
      menus ? Array.from(new Set(menus.map((item) => item.root)).values()) : [],
    []
  );

  // if (!selectedKeys) {
  //   return <div />;
  // }

  const onOpenChange = (openKeys: string[]) => {
    setOpenkeys(openKeys);
  };

  const onClick = (id: string) => {
    router.push(id);
  };

  const onSearch = (value: string) => {
    console.log('onSearch : ', value);
  };

  useEffect(() => {
    const pathname = router.pathname;
    const openKey = pathname.split(/(?=\/)/g)[0];
    setActiveKey(openKey);
    setOpenkeys(isSideMenuCollapsed ? undefined : [openKey]);
    setSelectedKeys([pathname]);
  }, [router.pathname, isSideMenuCollapsed]);

  return (
    <StyledMainMenu
      className="main-menu"
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={(openKeys) => onOpenChange(openKeys)}
      activeKey={activeKey}
    >
      {isSideMenuCollapsed ? (
        <></>
      ) : (
        <div className="main-menu-search">
          <Search
            placeholder="검색어를 입력해주세요."
            onSearch={onSearch}
            enterButton
          />
        </div>
      )}
      {roots.map((root) => {
        const menu = menuNames[root]?.admin;

        if (!menu) return null;

        return (
          <React.Fragment key={root}>
            {root === 'home' && <Divider />}
            <Menu.SubMenu
              key={`/${root}`}
              title={
                <Space style={{ height: '100%' }}>
                  {mainMenu[root]?.icon || ''}
                  {!collapsed && (
                    <span className="main-nav__menu-title">{menu}</span>
                  )}
                </Space>
              }
            >
              {menus
                .filter((x) => x.root === root)
                .map((item) => {
                  const pathNames =
                    item.root === 'home' ? '' : `/${item.root}/${item.key}`;

                  return (
                    <Menu.Item key={pathNames}>
                      <div onClick={() => onClick(pathNames)}>{item.name}</div>
                    </Menu.Item>
                  );
                })}
            </Menu.SubMenu>
            {root === 'home' && <Divider />}
          </React.Fragment>
        );
      })}
    </StyledMainMenu>
  );
};
