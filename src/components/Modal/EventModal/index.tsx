// base
import React, { useState } from 'react';

// style
import { StyledEventModal } from './style';

// components
import { MetaInputString } from 'components/Input';

// libraries
import { message, ModalProps } from 'antd';

interface EventModalProps extends ModalProps {
  eventKey: string;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  eventKey,
  onClose,
  ...props
}) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangePhone = (value: string) => {
    setPhone(value);
  };

  const onSubmit = () => {
    message.destroy();

    if (name === '' || phone === '') {
      message.error({
        content: '이름 및 휴대폰 번호를 확인해주세요.'
      });
      return;
    }

    console.log(name, phone, eventKey);
    // window.open()
  };

  const handleClose = () => {
    onClose();
    setName('');
    setPhone('');
  };

  return (
    <StyledEventModal
      centered
      onOk={onSubmit}
      onCancel={handleClose}
      {...props}
    >
      <MetaInputString
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
        style={{ marginBottom: 30 }}
      />
      <MetaInputString
        placeholder="휴대폰 번호를 입력해주세요."
        value={phone}
        onChange={(e) => onChangePhone(e.target.value)}
      />
    </StyledEventModal>
  );
};
