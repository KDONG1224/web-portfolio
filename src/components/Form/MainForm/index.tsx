// base
import React, { useState } from 'react';

// style
import { StyledMainForm } from './style';

// libraries
import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { InputLabel, MetaInputString } from 'components/Input';
import { BlurImage, ImgUploader } from 'components';

interface MainFormProps {
  onSubmit?: (values: any) => void;
}

export const MainForm: React.FC<MainFormProps> = ({ onSubmit }) => {
  const [form] = useForm();

  const [fileList, setFileList] = useState<string[]>([]);
  const [imgList, setImgList] = useState<any>();

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (imgList) {
      return;
    }

    if (e.target.files) {
      if (e.target.files.length === 0) {
        return;
      }
      if (e.target.files.length > 1) {
        message.error({
          content: '1개의 이미지를 업로드 할 수 있습니다. ',
          style: {
            marginTop: '5.5vh',
            fontSize: '24px'
          }
        });
        return;
      }
      const blobList: string[] = [];

      Array.prototype.forEach.call(e.target.files, (file) => {
        const blob = new Blob([file], { type: file.type });
        setImgList(file);

        form.setFieldValue('images', file);

        blobList.push(URL.createObjectURL(blob));
      });

      setFileList(blobList);
    }

    e.target.value = '';
  };

  const onClickImageDelete = () => {
    setFileList([]);
    form.setFieldsValue({
      images: []
    });
  };

  const onFinish = (values: any) => {
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
          <div>방명록을 남겨주세요.</div>
        </div>
        <div className="form-wrapper-middle">
          <div className="form-wrapper-middle-top">
            <Form.Item
              name="name"
              className="form-wrapper-middle-top-name"
              required
            >
              <MetaInputString
                style={{
                  minHeight: 40
                }}
                placeholder="작성자를 입력해주세요."
              />
            </Form.Item>
            <Form.Item name="email" className="form-wrapper-middle-top-email">
              <MetaInputString
                style={{
                  minHeight: 40
                }}
                placeholder="이메일을 입력해주세요."
              />
            </Form.Item>
          </div>
          <Form.Item
            className="form-wrapper-middle-content"
            name="content"
            required
          >
            <Input.TextArea placeholder="내용을 입력해주세요." />
          </Form.Item>
        </div>
        <div className="form-wrapper-bottom">
          <Form.Item
            name="images"
            className="guest-images"
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: 0,
              paddingLeft: 20
            }}
          >
            <ImgUploader onChangeFile={onChangeFile} />
            {fileList?.map((file, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    float: 'left',
                    marginTop: '8px',
                    marginLeft: '20px'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      width: '24px',
                      height: '24px',
                      background: '#ff4c01',
                      fontWeight: 600,
                      textAlign: 'center',
                      lineHeight: '24px',
                      marginLeft: '56px',
                      color: '#fff',
                      cursor: 'pointer',
                      zIndex: 99
                    }}
                    onClick={onClickImageDelete}
                  >
                    X
                  </div>
                  <BlurImage src={file || ''} alt="" width={80} height={80} />
                </div>
              );
            })}
          </Form.Item>
          <Button htmlType="submit">등록</Button>
        </div>
      </div>
    </StyledMainForm>
  );
};
