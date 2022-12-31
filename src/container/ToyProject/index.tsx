// base
import React, { useState } from 'react';

// style
import { StyledToyProject } from './style';

// components
import { BlurImage, EventModal, ProjectCard } from 'components';
import { Col, Row } from 'antd';

interface ToyProjectProps {
  datas: any[];
}

export const ToyProject: React.FC<ToyProjectProps> = ({ datas }) => {
  const [visible, setVisible] = useState(false);
  const [eventKey, setEventKey] = useState('');

  const handleModal = (name: string) => {
    setEventKey(name);

    if (name !== '') {
      setVisible(true);
    }
  };

  const handleModalClose = () => {
    setEventKey('');
    setVisible(false);
  };

  return (
    <>
      <StyledToyProject>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {datas.map((data) => (
            <Col key={data.id} span={4} style={{ marginBottom: 30 }}>
              <ProjectCard data={data} />
            </Col>
          ))}
        </Row>
      </StyledToyProject>
      <EventModal
        visible={visible}
        onClose={handleModalClose}
        eventKey={eventKey}
      />
    </>
  );
};
