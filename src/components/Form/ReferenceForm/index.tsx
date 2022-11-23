/* eslint-disable react/no-children-prop */
// base
import React, { useState } from 'react';

// style
import { StyledReferenceForm } from './style';

// components
import { MetaCard } from 'components/Card';
import { InputLabel, MetaInputString } from 'components/Input';

// libraries
import {
  Button,
  Checkbox,
  Col,
  Form,
  Radio,
  RadioChangeEvent,
  Rate,
  Row,
  Space,
  Upload
} from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useForm } from 'antd/lib/form/Form';
import { RcFile } from 'antd/lib/upload';

// const
import { browsers } from 'const';

interface ReferenceFormProps {
  onSubmit?: (values: any) => void;
}

const referenceOptions = [
  { label: 'MDN', value: 'MDN' },
  { label: 'w3', value: 'w3' }
];

export const ReferenceForm: React.FC<ReferenceFormProps> = ({ onSubmit }) => {
  const [form] = useForm();

  const [selcetType, setSelectType] = useState<string | undefined>();
  const [browers, setBrowers] = useState<any[]>([]);
  const [referSite, setReferSite] = useState<{ title: string; url: string }[]>(
    []
  );

  const onSelectReferType = (type: string) => {
    setSelectType(type);
  };

  const onChecked = (e: CheckboxChangeEvent) => {
    const { id, checked } = e.target;
    const title = form.getFieldValue('title');

    const result =
      id === 'MDN'
        ? {
            title: id,
            url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${title}`
          }
        : {
            title: id,
            url: `https://www.w3.org/TR/html52/textlevel-semantics.html#the-${title}-element`
          };

    if (checked) {
      return setReferSite((refer) => {
        if (refer) {
          const check = refer.filter((r) => r.title !== result.title);

          return [...check, result] as { title: string; url: string }[];
        }
        return [result] as { title: string; url: string }[];
      });
    }

    if (!checked) {
      return setReferSite((refer) => {
        if (refer) {
          const check = refer.filter((r) => r.title !== result.title);
          return [...check];
        }
        return [];
      });
    }
  };

  const onChagneCompatibility = (e: CheckboxChangeEvent) => {
    const { id, checked } = e.target;

    const result = {
      name: id,
      isUse: checked
    };

    if (checked) {
      return setBrowers((brower) => {
        if (brower) {
          const check = brower.filter((b) => b.name !== result.name);

          return [...check, result] as { name: string; checked: boolean }[];
        }
        return [result];
      });
    }

    if (!checked) {
      return setBrowers((brower) => {
        if (brower) {
          const check = brower.filter((b) => b.name !== result.name);
          return [...check];
        }
        return [];
      });
    }
  };

  const handleUpload = (file: RcFile) => {
    if (file.size > 20000000) {
      alert('20MB를 초과했습니다.');
      return Promise.reject();
    }

    return false;
  };

  const onFinish = (values: any) => {
    const data = {
      ...values,
      compatibility: browers,
      reference: referSite
    };

    if (onSubmit) {
      onSubmit(data);
    }

    form.resetFields();
    return;
  };

  return (
    <StyledReferenceForm form={form} onFinish={onFinish}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          {/* 기본 설정 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <MetaCard
              title="Reference 데이터 생성하기"
              children={
                <Row
                  justify="space-between"
                  gutter={24}
                  style={{ marginTop: '2rem' }}
                >
                  <Col span={12}>
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size={20}
                    >
                      {/* 타입 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="타입" require />

                        <Form.Item
                          className="create-wrapper-select"
                          name="type"
                          rules={[
                            {
                              required: true,
                              message: '타입을 선택해주세요.'
                            }
                          ]}
                        >
                          <Radio.Group
                            size="large"
                            onChange={(e) => onSelectReferType(e.target.value)}
                          >
                            <Radio value="html">HTML</Radio>
                            <Radio value="css">CSS</Radio>
                            <Radio value="javascript">JS</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Space>

                      {/* 이름 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="이름" require />
                        <Form.Item
                          className="create-wrapper-title"
                          name="title"
                          rules={[
                            {
                              required: true,
                              message: '이름을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="이름을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 사용법 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="태그사용법" require />
                        <Form.Item
                          className="create-wrapper-title"
                          name="tag"
                          rules={[
                            {
                              required: true,
                              message: '태그사용법을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="태그사용법을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 사용성 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="사용성" require />
                        <Form.Item
                          className="create-wrapper-title"
                          name="use"
                          rules={[
                            {
                              required: true,
                              message: '사용성을 입력해주세요.'
                            }
                          ]}
                        >
                          <Rate />
                        </Form.Item>
                      </Space>

                      {/* 정의 */}
                      <Space className="def-wrapper">
                        <Form.List name="definition">
                          {(fields, { add, remove }) => (
                            <>
                              <div style={{ gap: '8px', display: 'flex' }}>
                                <div className="">
                                  <InputLabel text="정의" require />
                                  <div className="btn-add-wrapper">
                                    <Form.Item>
                                      <Button
                                        onClick={() => add()}
                                        className="add-btn"
                                      >
                                        +
                                      </Button>
                                    </Form.Item>
                                  </div>
                                </div>
                                <div className="add-form-item">
                                  {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                      key={key}
                                      style={{
                                        display: 'flex',
                                        marginBottom: 8
                                      }}
                                      align="baseline"
                                    >
                                      <Form.Item
                                        {...restField}
                                        name={name}
                                        rules={[
                                          {
                                            required: true,
                                            message: '정의를 입력해주세요.'
                                          }
                                        ]}
                                      >
                                        <MetaInputString
                                          style={{
                                            maxWidth: '400px',
                                            width: '100%'
                                          }}
                                        />
                                      </Form.Item>
                                      {key !== 0 && (
                                        <Form.Item>
                                          <Button
                                            className="remove-btn"
                                            onClick={() => remove(name)}
                                          >
                                            -
                                          </Button>
                                        </Form.Item>
                                      )}
                                    </Space>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </Form.List>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size={20}
                    >
                      {/* 구조 */}
                      {selcetType === 'html' && (
                        <>
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="구조" require />
                            <Form.Item
                              className="create-wrapper-title"
                              name="element"
                              rules={[
                                {
                                  required: true,
                                  message: '구조를 선택해주세요.'
                                }
                              ]}
                            >
                              <Radio.Group size="large">
                                <Radio value="인라인 구조(Inline Element)">
                                  인라인 (Inline)
                                </Radio>
                                <Radio value="블록 구조(Block Element)">
                                  블록 (Block)
                                </Radio>
                              </Radio.Group>
                            </Form.Item>
                          </Space>

                          {/* 레퍼런스 */}
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="레퍼런스" />
                            <Form.Item name="reference">
                              <Form.Item>
                                {referenceOptions.map(({ label, value }) => (
                                  <React.Fragment key={value}>
                                    <Checkbox
                                      onChange={(e) => onChecked(e)}
                                      id={value}
                                    />
                                    <label className={`label-title ${label}`}>
                                      {label}
                                    </label>
                                  </React.Fragment>
                                ))}
                              </Form.Item>
                            </Form.Item>
                          </Space>
                        </>
                      )}

                      {/* 요약설명 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="요약설명" require />
                        <Form.Item
                          name="summary"
                          rules={[
                            {
                              required: true,
                              message: '요약설명을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="요약설명을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 한줄설명 */}
                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="한줄설명" require />
                        <Form.Item
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: '한줄설명을 입력해주세요.'
                            }
                          ]}
                        >
                          <MetaInputString placeholder="한 줄 설명을 입력해주세요." />
                        </Form.Item>
                      </Space>

                      {/* 접근성 */}
                      <Space className="def-wrapper">
                        <Form.List name="accessibility">
                          {(fields, { add, remove }) => (
                            <div style={{ gap: '8px', display: 'flex' }}>
                              <div className="">
                                <InputLabel text="접근성" require />
                                <div className="btn-add-wrapper">
                                  <Form.Item>
                                    <Button
                                      onClick={() => add()}
                                      className="add-btn"
                                    >
                                      +
                                    </Button>
                                  </Form.Item>
                                </div>
                              </div>
                              <div className="">
                                {fields.map(({ key, name, ...restField }) => (
                                  <Space
                                    key={key}
                                    style={{
                                      display: 'flex',
                                      marginBottom: 8
                                    }}
                                    align="baseline"
                                  >
                                    <Form.Item
                                      {...restField}
                                      name={name}
                                      rules={[
                                        {
                                          required: true,
                                          message: '접근성을 입력해주세요.'
                                        }
                                      ]}
                                    >
                                      <MetaInputString />
                                    </Form.Item>
                                    {key !== 0 && (
                                      <Form.Item>
                                        <Button
                                          className="remove-btn"
                                          onClick={() => remove(name)}
                                        >
                                          -
                                        </Button>
                                      </Form.Item>
                                    )}
                                  </Space>
                                ))}
                              </div>
                            </div>
                          )}
                        </Form.List>
                      </Space>
                    </Space>
                  </Col>
                </Row>
              }
            />

            <div style={{ marginTop: '2.5rem' }} />
            {/* 
            <MetaCard
              title="썸네일"
              children={
                <>
                  <Form.Item name="files" valuePropName="files">
                    <Upload
                      accept=".png, .jpg, .jpeg"
                      listType="picture"
                      maxCount={1}
                      beforeUpload={handleUpload}
                    >
                      <Row className="img-upload">
                        <div
                          className="img-upload-plus"
                          style={{
                            width: 50,
                            height: 50,
                            border: '1px solid black',
                            textAlign: 'center',
                            alignItems: 'center',
                            lineHeight: '50px'
                          }}
                        >
                          +
                        </div>
                      </Row>
                    </Upload>
                  </Form.Item>
                </>
              }
            /> */}
          </div>

          {/* 브라우저 호환성 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <MetaCard
              title="브라우저 호환성"
              children={
                <>
                  <Row
                    justify="space-between"
                    gutter={24}
                    style={{ marginTop: '2rem' }}
                  >
                    <Col span={24}>
                      <Form.Item name="compatibility">
                        <div className="browers-wrapper">
                          {browsers.map((item) => {
                            const checked = browers.filter(
                              (b) => b.name === item
                            );

                            return (
                              <div
                                id={item}
                                className={`icons-wrapper ${item}-wrapper`}
                                key={item}
                                // onClick={(e) => console.log(e.currentTarget.id)}
                              >
                                <Checkbox
                                  id={item}
                                  className="brower-checkbox"
                                  checked={
                                    checked.length > 0 && checked[0].isUse
                                  }
                                  defaultChecked={true}
                                  onChange={(e) => onChagneCompatibility(e)}
                                />
                                <div className={`html-icon ${item}-icon`} />
                              </div>
                            );
                          })}
                        </div>
                      </Form.Item>
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
    </StyledReferenceForm>
  );
};
