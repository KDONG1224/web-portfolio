// base
import React, { useEffect, useState } from 'react';

// style
import { StyledAlgorithmForm } from './style';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import { BlurImage, CommonDrawer, CustomEditor, ImgUploader } from 'components';
import { MetaInputString } from 'components/Input';

// libraries
import { useForm } from 'antd/lib/form/Form';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button, Descriptions, Form, message, Radio, Rate } from 'antd';
import { useMedia } from 'hooks';

interface AlgorithmFormProps {
  open: boolean;
  handleCreateClose: (e: any) => void;
  onSubmit?: (values: FormData) => void;
}

export const AlgorithmFormV2: React.FC<AlgorithmFormProps> = ({
  open = false,
  onSubmit,
  handleCreateClose
}) => {
  const [form] = useForm();
  const { isMobile } = useMedia();

  const [fileList, setFileList] = useState<string[]>([]);
  const [imgList, setImgList] = useState<any>();
  const [imgUrl, setImgUrl] = useState<string>('');

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [editorStateV2, setEditorStateV2] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const onEditorStateChangeV2 = (editorState: EditorState) => {
    setEditorStateV2(editorState);
  };

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
        blobList.push(URL.createObjectURL(blob));
      });

      setFileList(blobList);
    }

    e.target.value = '';
  };

  const onClickImageDelete = () => {
    setFileList([]);
    form.setFieldsValue({
      thumbmnaile: []
    });
  };

  const onFinish = (values: any) => {
    const { grassMyDesc, grassDifferDesc, level, title, question, hint, type } =
      values;

    const formData = new FormData();

    formData.append(
      'grassDifferCode',
      JSON.stringify(
        draftToHtml(convertToRaw(editorStateV2.getCurrentContent()))
      )
    );
    formData.append('grassDifferDesc', grassDifferDesc);
    formData.append(
      'grassMyCode',
      JSON.stringify(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    );
    formData.append('grassMyDesc', grassMyDesc);
    formData.append('level', level);
    formData.append('title', title);
    formData.append('hint', hint);
    formData.append('question', question);
    formData.append('type', type);

    if (imgUrl === '') {
      formData.append('thumbmnaile', imgList, imgList.name);
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    form.resetFields();
    onClickImageDelete();
    setEditorState(EditorState.createEmpty());
    setEditorStateV2(EditorState.createEmpty());
    return;
  };

  return (
    <CommonDrawer
      title="Create New Algorithm"
      visible={open}
      placement="right"
      width={isMobile ? '100%' : 1000}
      closable
      onClose={handleCreateClose}
      extra={
        <Button
          htmlType="submit"
          onClick={() => onFinish(form.getFieldsValue())}
        >
          저장
        </Button>
      }
    >
      <StyledAlgorithmForm form={form} onFinish={onFinish}>
        <Descriptions className="algo-wrapper" bordered>
          {/* 타입 */}
          <Descriptions.Item label="타입" span={3}>
            <Form.Item name="type">
              <Radio.Group size="large">
                <Radio value="backjun">백준</Radio>
                <Radio value="programmerce">프로그래머스</Radio>
                <Radio value="etc">기타</Radio>
              </Radio.Group>
            </Form.Item>
          </Descriptions.Item>

          {/* 난이도 */}
          <Descriptions.Item label="난이도" span={3}>
            <Form.Item
              className="create-algo-level"
              name="level"
              rules={[
                {
                  required: true,
                  message: '레벨을 입력해주세요.'
                }
              ]}
            >
              <Rate />
            </Form.Item>
          </Descriptions.Item>

          {/* 썸네일 */}
          <Descriptions.Item label="썸네일" span={3}>
            <Form.Item valuePropName="thumbmnaile" className="thumbmnaile">
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
          </Descriptions.Item>

          {/* 타이틀 */}
          <Descriptions.Item label="타이틀" span={3}>
            <Form.Item name="title">
              <MetaInputString
                placeholder="타이틀을 입력해주세요."
                style={{ minHeight: 'auto !important', height: '100%' }}
              />
            </Form.Item>
          </Descriptions.Item>

          {/* 질문 */}
          <Descriptions.Item label="질문" span={3}>
            <Form.Item
              name="question"
              rules={[
                {
                  required: true,
                  message: '질문을 입력해주세요.'
                }
              ]}
            >
              <MetaInputString
                placeholder="질문을 입력해주세요."
                style={{ minHeight: 'auto !important', height: '100%' }}
              />
            </Form.Item>
          </Descriptions.Item>

          {/* 힌트 */}
          <Descriptions.Item label="힌트" span={3}>
            <Form.Item
              name="hint"
              rules={[
                {
                  required: true,
                  message: '힌트를 입력해주세요.'
                }
              ]}
            >
              <MetaInputString
                placeholder="힌트를 입력해주세요."
                style={{ minHeight: 'auto !important', height: '100%' }}
              />
            </Form.Item>
          </Descriptions.Item>

          {/* 나의 풀이 */}
          <Descriptions.Item label="나의 풀이" span={3}>
            <Form.Item name="grassMyCode" className="code-editor">
              <CustomEditor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
            </Form.Item>
          </Descriptions.Item>

          {/* 나의 풀이 해석 */}
          <Descriptions.Item label="나의 풀이 해석" span={3}>
            <Form.Item
              name="grassMyDesc"
              rules={[
                {
                  required: true,
                  message: '나의 풀이 해석을 입력해주세요.'
                }
              ]}
            >
              <MetaInputString
                placeholder="나의 풀이 해석을 입력해주세요."
                style={{ minHeight: 'auto !important', height: '100%' }}
              />
            </Form.Item>
          </Descriptions.Item>

          {/* 다른 풀이 */}
          <Descriptions.Item label="다른 풀이" span={3}>
            <Form.Item name="grassDifferCode" className="code-editor">
              <CustomEditor
                editorState={editorStateV2}
                onEditorStateChange={onEditorStateChangeV2}
              />
            </Form.Item>
          </Descriptions.Item>

          {/* 다른 풀이 해석 */}
          <Descriptions.Item label="다른 풀이 해석" span={3}>
            <Form.Item
              name="grassDifferDesc"
              rules={[
                {
                  required: true,
                  message: '다른 풀이 해석을 입력해주세요.'
                }
              ]}
            >
              <MetaInputString
                placeholder="다른 풀이 해석을 입력해주세요."
                style={{ minHeight: 'auto !important', height: '100%' }}
              />
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </StyledAlgorithmForm>
    </CommonDrawer>
  );
};
