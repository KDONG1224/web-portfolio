// base
import React from 'react';
import { useSelector } from 'react-redux';

// style
import { StyledMainCard } from './style';

// components
import { MainCardItem } from 'components';

// library
import { Col, Row } from 'antd';

// images
import { exImg } from 'const/images';

// modules
import { StoreState } from 'modules';

interface MainCardProps {}

export const MainCard: React.FC<MainCardProps> = ({}) => {
  const { isSideMenuCollapsed } = useSelector((state: StoreState) => state.ui);

  const item = [
    {
      key: 'ex01',
      title: '강동재 포폴01!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_01
    },
    {
      key: 'ex02',
      title: '강동재 포폴02!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_02
    },
    {
      key: 'ex03',
      title: '강동재 포폴03!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_03
    },
    {
      key: 'ex04',
      title: '강동재 포폴04!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_04
    },
    {
      key: 'ex05',
      title: '강동재 포폴!05',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_05
    },
    {
      key: 'ex06',
      title: '강동재 포폴!06',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_06
    },
    {
      key: 'ex07',
      title: '강동재 포폴!07',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_07
    },
    {
      key: 'ex08',
      title: '강동재 포폴!08',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_08
    },
    {
      key: 'ex09',
      title: '강동재 포폴09!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_01
    },
    {
      key: 'ex10',
      title: '강동재 포폴!10',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_06
    },
    {
      key: 'ex11',
      title: '강동재 포폴11!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_03
    },
    {
      key: 'ex12',
      title: '강동재 포폴12!',
      desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elitsodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
      url: exImg.EX_NUM_04
    }
  ];

  return (
    <StyledMainCard>
      <Row
        justify='space-between'
        gutter={isSideMenuCollapsed ? [112, 40] : [58, 40]}
      >
        {item.map(card => (
          <Col span={6} key={card.key}>
            <MainCardItem url={card.url} title={card.title} desc={card.desc} />
          </Col>
        ))}
      </Row>
    </StyledMainCard>
  );
};
