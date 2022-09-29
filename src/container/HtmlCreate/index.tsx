/* eslint-disable react/no-children-prop */
// base
import React, { useEffect, useState } from 'react';

// style
import { StyledHtmlCreate, PrefixStyled, StyledInputSearch } from './style';

// libraries
import {
  Row,
  Col,
  Space,
  Button,
  Form,
  Radio,
  Select,
  Input,
  Slider,
  Rate
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

// components
import { MetaCard, CompatibilityTable } from 'components';
import { MetaInputString } from 'components/Input';
import NoticeEtcTable, {
  ResponseProductNoticeOption
} from 'components/Table/NoticeEtcTable';

import { browserNameChange } from 'utils';

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
  const [select, setSelect] = useState<any[]>([]);

  // inputBox
  const [defintionList, setDefinitionList] = useState<
    {
      key: number;
      desc: string;
    }[]
  >([{ key: 0, desc: '' }]);

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

  const onChagneCompatibility = (value: string, browserName: string) => {
    console.log('==== value ==== : ', value);
    console.log('==== browserName ==== : ', browserName);

    const info = browserNameChange(browserName);

    const data = {
      browserName: browserName,
      apply: value,
      ...info
    };

    setSelect((prev: any) => {
      if (prev) {
        const some = prev.some((p: any) => p.browserName === browserName);
        const filter = prev.filter((p: any) => p.browserName !== browserName);

        if (some) {
          return [...filter, data];
        }
        return [...prev, data];
      }

      return [data];
    });
  };

  /*
    정의 input 추가하기
  */
  const definitionAdded = () => {
    console.log('ADD');

    let lastKey = defintionList[defintionList.length - 1].key;

    const add = {
      key: lastKey + 1,
      desc: ''
    };

    setDefinitionList((prev) => {
      return [...prev, add];
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value } = e.currentTarget;
    console.log('=== value === : ', value);
    console.log('=== idx === : ', idx);

    const list = [...defintionList];
    list[idx]['desc'] = value;
    setDefinitionList(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...defintionList];
    list.splice(index, 1);
    setDefinitionList(list);
  };

  const onFinish = async (values: any) => {
    const formData = new FormData();
    // const {
    //   type,
    //   title,
    //   name,
    //   phone,
    //   definition,
    //   accessibility,
    //   compatibility
    // } = values;

    console.log('=== values === : ', values);
  };

  // useEffect(() => {
  //   adde();
  // }, []);

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
                      <Col span={12}>
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size={20}
                        >
                          {/* 태그타입 */}
                          <Space style={{ height: '4.6rem' }}>
                            <InputLabel text="태그타입" require />

                            <Form.Item
                              className="create-wrapper-select"
                              name="type"
                              rules={[
                                {
                                  required: true,
                                  message: '태그 타입을 선택해주세요.'
                                }
                              ]}
                            >
                              <Radio.Group size="large">
                                <Radio value="html">HTML</Radio>
                                <Radio value="css">CSS</Radio>
                              </Radio.Group>
                            </Form.Item>
                          </Space>

                          {/* 태그이름 */}
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
                              <MetaInputString placeholder="태그이름을 입력해주세요." />
                            </Form.Item>
                          </Space>

                          {/* 태그사용법 */}
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
                                      {fields.map(
                                        ({ key, name, ...restField }) => (
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
                                                  message:
                                                    '정의를 입력해주세요.'
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
                                        )
                                      )}
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
                                    {fields.map(
                                      ({ key, name, ...restField }) => (
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
                                                message:
                                                  '접근성을 입력해주세요.'
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
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            </Form.List>
                          </Space>
                        </Space>
                      </Col>
                    </Row>
                  </>
                }
              />
            </div>

            {/* 브라우저 호환성 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <MetaCard children={<></>} />
            </div>
            {/* <div style={{ marginBottom: '2.5rem' }}>
              <MetaCard
                children={
                  <>
                    <div>호환성 - Compatibility</div>
                    <CompatibilityTable />
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'chrome')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'firefox')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'safari')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'opera')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'whale')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'explorer8')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'explorer9')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'explorer10')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'explorer11')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'edge')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'android')
                                }
                              >
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
                              <Select
                                onChange={(value) =>
                                  onChagneCompatibility(value, 'apple')
                                }
                              >
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
            </div> */}
          </Col>
        </Row>
        <Button htmlType="submit">저장</Button>
      </Form>
    </StyledHtmlCreate>
  );
};
