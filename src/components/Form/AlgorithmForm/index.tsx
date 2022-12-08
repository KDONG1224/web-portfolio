/* eslint-disable react/no-children-prop */
// base
import React, { useState } from 'react';

// style
import { StyledAlgorithmForm } from './style';

// libraries

import { Button, Col, Form, message, Radio, Rate, Row, Space } from 'antd';
import { CustomEditor, ImgUploader, MetaCard } from 'components';
import { InputLabel, MetaInputString } from 'components/Input';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { useForm } from 'antd/lib/form/Form';
import Image from 'next/image';
import draftToHtml from 'draftjs-to-html';

interface AlgorithmFormProps {
  onSubmit?: (values: FormData) => void;
}

export const AlgorithmForm: React.FC<AlgorithmFormProps> = ({ onSubmit }) => {
  const [form] = useForm();

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
    console.log(values);

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
    <StyledAlgorithmForm form={form} onFinish={onFinish}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <div style={{ marginBottom: '2.5rem' }}>
            <MetaCard
              title="알고리즘 풀이 작성하기"
              children={
                <>
                  <Row
                    justify="space-between"
                    gutter={24}
                    style={{ marginTop: '2rem' }}
                  >
                    {/* 왼쪽 */}
                    <Col span={12}>
                      {/* 타입 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="타입" require />
                        <Form.Item
                          name="type"
                          rules={[
                            {
                              required: true,
                              message: '타입을 선택해주세요.'
                            }
                          ]}
                        >
                          <Radio.Group size="large">
                            <Radio value="backjun">백준</Radio>
                            <Radio value="programmerce">프로그래머스</Radio>
                            <Radio value="etc">기타</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Space>

                      {/* 타이틀 */}
                      <Space style={{ height: '4.6rem', marginBottom: 30 }}>
                        <InputLabel text="타이틀" require />
                        <Form.Item
                          name="title"
                          rules={[
                            {
                              required: true,
                              message: '타이틀을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="타이틀을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 질문 */}
                      <Space style={{ height: '4.6rem', marginBottom: 30 }}>
                        <InputLabel text="질문" require />
                        <Form.Item
                          name="question"
                          rules={[
                            {
                              required: true,
                              message: '질문을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="질문을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 힌트 */}
                      <Space style={{ height: '4.6rem', marginBottom: 30 }}>
                        <InputLabel text="힌트" require />
                        <Form.Item
                          name="hint"
                          rules={[
                            {
                              required: true,
                              message: '힌트를 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="힌트를 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 나의 풀이 해석 */}
                      <Space style={{ height: '4.6rem', marginBottom: 30 }}>
                        <InputLabel text="나의 풀이 해석" require />
                        <Form.Item
                          name="grassMyDesc"
                          rules={[
                            {
                              required: true,
                              message: '타이틀을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="나의 풀이 해석을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 다른 풀이 해석 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="다른 풀이 해석" require />
                        <Form.Item
                          name="grassDifferDesc"
                          rules={[
                            {
                              required: true,
                              message: '타이틀을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="나의 풀이 해석을 입력해주세요." />
                        </Form.Item>
                      </Space>
                    </Col>

                    {/* 오른쪽 */}
                    <Col span={12}>
                      {/* 난이도 */}
                      <Space style={{ height: '4.6rem', marginBottom: 50 }}>
                        <InputLabel text="레벨" require />
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
                      </Space>

                      {/* 나의 풀이 */}
                      <Space style={{ marginBottom: 100 }}>
                        <InputLabel text="나의 풀이" require />
                        <Form.Item
                          name="grassMyCode"
                          className="code-editor"
                          style={{ width: 400 }}
                        >
                          <CustomEditor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                          />
                        </Form.Item>
                      </Space>

                      {/* 다른 풀이 */}
                      <Space>
                        <InputLabel text="다른 풀이" require />
                        <Form.Item
                          name="grassDifferCode"
                          className="code-editor"
                          style={{ width: 400 }}
                        >
                          <CustomEditor
                            editorState={editorStateV2}
                            onEditorStateChange={onEditorStateChangeV2}
                          />
                        </Form.Item>
                      </Space>

                      {/* 썸네일 */}
                      <Space style={{ height: '4.6rem', marginTop: 70 }}>
                        <InputLabel text="썸네일" />
                        <Form.Item
                          valuePropName="thumbmnaile"
                          className="thumbmnaile"
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
                                <Image
                                  src={file || ''}
                                  alt=""
                                  width={80}
                                  height={80}
                                />
                              </div>
                            );
                          })}
                          {/* {editing && editDatas.thumbmnaile && imgUrl !== '' && (
                            <span
                              style={{
                                marginLeft: 20
                              }}
                            >
                              <Image
                                src={imgUrl}
                                alt={editDatas.title}
                                width={80}
                                height={80}
                              />
                            </span>
                          )} */}
                        </Form.Item>
                      </Space>
                    </Col>
                  </Row>
                </>
              }
            />
          </div>
        </Col>
      </Row>
      <div
        style={{
          marginBottom: '2.5rem',
          width: '100%',
          position: 'relative'
        }}
      >
        <Button className="submit-btn" htmlType="submit">
          저장
        </Button>
      </div>
    </StyledAlgorithmForm>
  );
};
