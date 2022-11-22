/* eslint-disable react/no-children-prop */
// base
import React, { useMemo, useState } from 'react';

// style
import { StyledHtmlCreate, PrefixStyled } from './style';

// libraries
import {
  Row,
  Col,
  Space,
  Button,
  Form,
  Radio,
  Rate,
  Checkbox,
  Upload
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

// components
import { MetaCard } from 'components';
import { MetaInputString } from 'components/Input';

// const
import { browsers, SWR_REFERENCE_KEY } from 'const';
import { CreateReference, ReferApi } from 'modules';
import { RcFile } from 'antd/lib/upload';
import useSWR from 'swr';

interface HtmlCreateProps {}

const InputLabel = ({ text, require }: { text: String; require?: boolean }) => (
  <PrefixStyled style={{ minWidth: '100px' }}>
    {text} {require && <span style={{ color: '#FF6712' }}>*</span>}
  </PrefixStyled>
);

const referenceOptions = [
  { label: 'MDN', value: 'MDN' },
  { label: 'w3', value: 'w3' }
];

export const HtmlCreate: React.FC<HtmlCreateProps> = ({}) => {
  const [form] = useForm();

  const [edit, setEdit] = useState<boolean>(false);
  const [browers, setBrowers] = useState<any[]>([]);
  const [referSite, setReferSite] = useState<{ title: string; url: string }[]>(
    []
  );

  const referenceApi = useMemo(() => {
    return new ReferApi();
  }, []);

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
        return [result] as { name: string; checked: boolean }[];
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

  const createReference = (data: CreateReference) => {
    return referenceApi.createReference(data);
  };

  // const { data, mutate } = useSWR([SWR_REFERENCE_KEY], () => createReference())

  const onFinish = (values: CreateReference) => {
    // const formData = new FormData();

    const {
      accessibility,
      compatibility,
      definition,
      description,
      element,
      reference,
      summary,
      tag,
      title,
      type,
      use,
      files
    } = values;

    // formData.append('accessibility', JSON.stringify(accessibility));
    // formData.append('compatibility', JSON.stringify(compatibility));
    // formData.append('definition', JSON.stringify(definition));
    // formData.append('description', description);
    // formData.append('element', element);
    // formData.append('reference', JSON.stringify(reference));
    // formData.append('summary', summary);
    // formData.append('tag', tag);
    // formData.append('title', title);
    // formData.append('type', type);
    // formData.append('use', String(use));

    const _files: any[] = [];

    console.log(files.file);
    console.log(JSON.stringify(files.file));

    // if (files && files.fileList) {
    //   files.fileList.forEach((file: any) => {
    //     const uid = file.uid;
    //     const obj = file.originFileObj;
    //     console.log('AW : ', obj);
    //     console.log('AW : ', JSON.stringify(obj));
    //     console.log(
    //       'AA : ',
    //       JSON.stringify({
    //         uid: JSON.stringify(obj)
    //       })
    //     );

    //     _files.push(
    //       JSON.stringify({
    //         uid: JSON.stringify(obj)
    //       })
    //     );
    //   });
    // }

    console.log(_files);

    const _values = {
      ...values,
      files: files.file,
      reference: JSON.stringify(referSite),
      compatibility: JSON.stringify(browers),
      use: String(use),
      definition: JSON.stringify(definition),
      accessibility: JSON.stringify(accessibility)
    };

    // delete _values.files;

    console.log('=== _values === : ', _values);

    createReference(_values);
    // form.resetFields();
  };

  return (
    <StyledHtmlCreate>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            {/* 기본 설정 */}
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
                                <Radio value="javascript">JS</Radio>
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

              <div style={{ marginTop: '2.5rem' }} />

              <MetaCard
                title="썸네일 올리기"
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
              />
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
                                  onClick={(e) =>
                                    console.log(e.currentTarget.id)
                                  }
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
      </Form>
    </StyledHtmlCreate>
  );
};
