/* eslint-disable react/no-children-prop */
// base
import React, { useState } from 'react';

// style
import { StyledHtmlCreate, PrefixStyled, StyledInputSearch } from './style';

// libraries
import { Row, Col, Space, Button, Form, Radio, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

// components
import { MetaCard, CompatibilityTable } from 'components';
import { MetaInputString } from 'components/Input';
import NoticeEtcTable, {
  ResponseProductNoticeOption
} from 'components/Table/NoticeEtcTable';

interface HtmlCreateProps {}

const InputLabel = ({ text, require }: { text: String; require?: boolean }) => (
  <PrefixStyled style={{ minWidth: '100px' }}>
    {text} {require && <span style={{ color: '#FF6712' }}>*</span>}
  </PrefixStyled>
);

export const HtmlCreate: React.FC<HtmlCreateProps> = ({}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [productNoticeType, setProductNoticeType] = useState<any[]>([]);
  const [productNoticeContent, setProductNoticeContent] = useState<string>('');

  const [form] = useForm();

  const onChange = (e: ResponseProductNoticeOption[]) => {
    let result: string[] = [];

    e.forEach(({ text }) => {
      result.push(text);
    });

    setProductNoticeType(result);
    // form.setFieldsValue({
    //   productNotice: e,
    // });
  };

  console.log('==== productNoticeType ====  : ', productNoticeType);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    const { type, title, name, phone, definition, accessibility, compatibility } = values;

    let result: string[] = [];
    let _result: string[] = [];

    definition.forEach(({ text }) => {
      result.push(text);
    });

    accessibility.forEach(({ text }) => {
      _result.push(text);
    });

    console.log('result : ', result);

    const _values = {
      ...values,
      definition: result,
      accessibility: _result
    };

    console.log('values : ', values);
    console.log('==== finish ==== : ', _values);
  };

  return (
    <StyledHtmlCreate>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <div style={{ marginBottom: '2.5rem' }}>
              <MetaCard
                title="HTML 데이터 생성하기"
                children={
                  <>
                    <Row
                      justify="space-between"
                      gutter={24}
                      style={{ marginTop: '2rem' }}
                    >
                      <Col span={13}>
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size={20}
                        >
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="태그타입" require />

                            <Form.Item
                              className="create-wrapper-select"
                              name="type"
                            >
                              <Radio.Group size="large">
                                <Radio value="html">HTML</Radio>
                                <Radio value="css">CSS</Radio>
                              </Radio.Group>
                            </Form.Item>
                          </Space>
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="태그이름" require />
                            <Form.Item
                              className="create-wrapper-title"
                              name="title"
                              rules={[
                                {
                                  required: true,
                                  message: '태그이름을 입력해주세요.'
                                }
                              ]}
                            >
                              <MetaInputString />
                            </Form.Item>
                          </Space>
                          {/* <Space style={{ height: '4.6rem' }}>
                          <InputLabel text="태그사용법" require />
                          <Form.Item
                            name="tagInfo"
                            rules={[
                              {
                                required: true,
                                message: '태그사용법을 입력해주세요.'
                              }
                            ]}
                            noStyle
                          >
                            <MetaInputString />
                          </Form.Item>
                        </Space> */}
                        </Space>
                      </Col>
                      <Col span={11}>
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size={20}
                        >
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="연락처" />
                            <Form.Item name="phone">
                              <MetaInputString />
                            </Form.Item>
                          </Space>
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="이름" />
                            <Form.Item name="name">
                              <MetaInputString />
                            </Form.Item>
                          </Space>
                        </Space>
                      </Col>
                    </Row>

                    {/* 정의 */}
                    <InputLabel text="정의" require />
                    <Form.Item
                      name="definition"
                      rules={[
                        {
                          required: true,
                          message: '정의를 입력해주세요.'
                        }
                      ]}
                    >
                      <NoticeEtcTable
                        onChange={onChange}
                        value={productNoticeType}
                      />
                    </Form.Item>

                    {/* 접근성 */}
                    <InputLabel text="접근성" require />
                    <Form.Item
                      name="accessibility"
                      rules={[
                        {
                          required: true,
                          message: '접근성을 입력해주세요.'
                        }
                      ]}
                    >
                      <NoticeEtcTable
                        onChange={onChange}
                        value={productNoticeType}
                      />
                    </Form.Item>
                  </>
                }
              />
            </div>
            <div style={{ marginBottom: '2.5rem' }}>
              <MetaCard
                children={
                  <>
                    <div>호환성 - Compatibility</div>
                    {/* <CompatibilityTable /> */}
                    <Form.Item
                      name="compatibility"
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: '호환성을 입력해주세요.'
                      //   }
                      // ]}
                    >
                      <Row gutter={[48, 48]}>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon chrom-icon" />
                            <p className="icon-select">
                              <Select>
                              <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon firefox-icon" />
                            <p className="icon-select">
                              <Select>
                              <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon safari-icon" />
                            <p className="icon-select">
                              <Select>
                              <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon opera-icon" />
                            <p className="icon-select">
                              <Select>
                              <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon whale-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon explorer8-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon explorer9-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon explorer10-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon explorer11-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon edge-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon android-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                        <Col span={2}>
                          <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                          >
                            <p className="html-icon apple-icon" />
                            <p className="icon-select">
                              <Select>
                                <Select.Option value="o">o</Select.Option>
                                <Select.Option value="x">x</Select.Option>
                              </Select>
                            </p>
                          </Space>
                        </Col>
                      </Row>
                    </Form.Item>
                  </>
                }
              />
            </div>
          </Col>
        </Row>
        <Button htmlType="submit">저장</Button>
      </Form>
    </StyledHtmlCreate>
  );
};
