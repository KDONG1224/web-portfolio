/* eslint-disable react/no-children-prop */
// base
import React, { useState } from 'react';

// style
import { StyledAlgorithmCreate } from './style';

// libraries

import { Col, Form, Radio, Rate, Row, Space } from 'antd';
import { CustomEditor, MetaCard } from 'components';
import { InputLabel, MetaInputString } from 'components/Input';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw, EditorState } from 'draft-js';
import { useForm } from 'antd/lib/form/Form';

export const AlgorithmCreate = () => {
  const [form] = useForm();

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return (
    <StyledAlgorithmCreate form={form}>
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
                      {/* 타이틀 */}
                      <Space style={{ height: '4.6rem' }}>
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

                      {/* 난이도 */}
                      <Space style={{ height: '4.6rem' }}>
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
                    </Col>

                    {/* 오른쪽 */}
                    <Col span={12}>
                      <Space style={{ height: '4.6rem' }}>
                        <Form.Item name="mySolve">
                          <InputLabel text="내 풀이" require />
                          <CustomEditor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                          />
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

      {/* 문제 */}
      <Form.Item name="title">
        <div>문제</div>
      </Form.Item>

      {/* 힌트 */}
      <Form.Item name="title">
        <div>힌트</div>
      </Form.Item>

      {/* 나의 풀이 코드 */}
      <Form.Item name="title">
        <div>나의 풀이 코드</div>
      </Form.Item>

      {/* 나의 풀이 해석 */}
      <Form.Item name="title">
        <div>나의 풀이 해석</div>
      </Form.Item>

      {/* 다른 풀이 코드 */}
      <Form.Item name="title">
        <div>다른 풀이 코드</div>
      </Form.Item>

      {/* 다른 풀이 해석 */}
      <Form.Item name="title">
        <div>다른 풀이 해석</div>
      </Form.Item>
    </StyledAlgorithmCreate>
  );
};
