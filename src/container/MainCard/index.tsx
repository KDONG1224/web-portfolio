// base
import React from 'react';
import { useRouter } from 'next/router';
// import { useSelector } from 'react-redux';

// style
import { StyledMainCard } from './style';

// components
import { MainCardItem } from 'components';

// library
import { Col, Row } from 'antd';

// images
import { exImg } from 'consts/images';

// hooks
import { useMedia } from 'hooks';

// modules
// import { StoreState } from 'modules';

interface MainCardProps {}

export const MainCard: React.FC<MainCardProps> = ({}) => {
  // const { isSideMenuCollapsed } = useSelector((state: StoreState) => state.ui);
  const router = useRouter();
  const { isMobile } = useMedia();

  const item = [
    {
      key: 'about',
      title: '어바웃',
      eng: 'about',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_01
    },
    {
      key: 'html',
      title: 'HTML',
      eng: 'html',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_02
    },
    {
      key: 'css',
      title: 'CSS',
      eng: 'css',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_03
    },
    {
      key: 'javascript',
      title: '자바스크립트',
      eng: 'javascript',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_04
    },
    {
      key: 'algorithm',
      title: '알고리즘',
      eng: 'algorithm',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_05
    },
    {
      key: 'figma',
      title: '피그마',
      eng: 'figma',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_06
    },
    {
      key: 'notion',
      title: '노션',
      eng: 'notion',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_07
    },
    {
      key: 'toy-project',
      title: '토이프로젝트',
      eng: 'toy-project',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_08
    },
    {
      key: 'nestjs',
      title: 'NestJS',
      eng: 'nestjs',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_01
    }
    // {
    //   key: 'ex10',
    //   title: '강동재 포폴!10',
    //   desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
    //   url: exImg.EX_NUM_06
    // },
    // {
    //   key: 'ex11',
    //   title: '강동재 포폴11!',
    //   desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
    //   url: exImg.EX_NUM_03
    // },
    // {
    //   key: 'ex12',
    //   title: '강동재 포폴12!',
    //   desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
    //   url: exImg.EX_NUM_04
    // }
  ];

  const onClick = (key: string) => {
    router.push(key);
  };

  return (
    <StyledMainCard isMobile={isMobile}>
      <Row
        justify="space-between"
        // gutter={isSideMenuCollapsed ? [112, 40] : [58, 40]}
        gutter={isMobile ? [40, 40] : [40, 40]}
      >
        {item.map((card) => (
          <Col
            span={!isMobile ? 6 : 8}
            key={card.key}
            onClick={() => onClick(card.key)}
          >
            <MainCardItem url={card.url} title={card.title} desc={card.desc} />
          </Col>
        ))}
      </Row>
    </StyledMainCard>
  );
};
