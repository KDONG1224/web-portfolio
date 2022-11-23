// base
import React from 'react';

// style
import { StyledMainForm } from './style';

// libraries
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';

interface MainFormProps {
  onSubmit?: (values: any) => void;
}

export const MainForm: React.FC<MainFormProps> = ({ onSubmit }) => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log('== values == : ', values);
    if (onSubmit) {
      onSubmit(values);
    }

    form.resetFields();
    return;
  };

  return (
    <StyledMainForm form={form} onFinish={onFinish}>
      <div className="form-wrapper">
        <div className="form-wrapper-top">
          <div>Create a Post</div>
        </div>
        <div className="form-wrapper-middle">
          <Form.Item className="form-wrapper-middle-content" name="content">
            <Input.TextArea placeholder="내용을 입력해주세요." />
          </Form.Item>
        </div>
        <div className="form-wrapper-bottom">
          <Button htmlType="submit">Post</Button>
        </div>
      </div>
    </StyledMainForm>
  );
};
