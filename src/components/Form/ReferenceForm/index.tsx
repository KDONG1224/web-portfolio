/* eslint-disable react/no-children-prop */
// base
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

// style
import { StyledReferenceForm } from './style';

// components
import { ImgUploader } from 'components';
import { MetaCard } from 'components/Card';
import { InputLabel, MetaInputString } from 'components/Input';

// libraries
import {
  Button,
  Checkbox,
  Col,
  Form,
  message,
  Radio,
  Rate,
  Row,
  Space
} from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useForm } from 'antd/lib/form/Form';

// const
import { browsers } from 'const';

// modules
import { ResponseReferenceProps } from 'modules';

interface ReferenceFormProps {
  editing?: boolean;
  editDatas?: any;
  onSubmit?: (values: FormData) => void;
}

const referenceOptions = [
  { label: 'MDN', value: 'MDN' },
  { label: 'w3', value: 'w3' }
];

const browersOption = [
  { name: 'firefox', isUse: true },
  { name: 'chrome', isUse: true },
  { name: 'safari', isUse: true },
  { name: 'whale', isUse: true },
  { name: 'opera', isUse: true },
  { name: 'explorer8', isUse: true },
  { name: 'explorer9', isUse: true },
  { name: 'explorer10', isUse: true },
  { name: 'explorer11', isUse: true },
  { name: 'edge', isUse: true },
  { name: 'android', isUse: true },
  { name: 'apple', isUse: true }
];

export const ReferenceForm: React.FC<ReferenceFormProps> = ({
  editing = false,
  editDatas,
  onSubmit
}) => {
  const [form] = useForm();

  const [fileList, setFileList] = useState<string[]>([]);
  const [imgList, setImgList] = useState<any>();
  const [browers, setBrowers] =
    useState<{ name: string; isUse: boolean }[]>(browersOption);
  const [referSite, setReferSite] = useState<{ title: string; url: string }[]>(
    []
  );

  const setInitialValues = useCallback(() => {
    console.log('editing : ', editing);
    console.log('editDatas : ', editDatas);
  }, [editing, editDatas]);

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
      name: id as string,
      isUse: checked
    };

    const filter = browers.filter((b) => b.name !== result.name);

    setBrowers([...filter, result]);
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onFinish = (values: ResponseReferenceProps) => {
    const {
      accessibility,
      definition,
      description,
      element,
      summary,
      tag,
      title,
      type,
      use
    } = values;

    const formData = new FormData();

    formData.append('accessibility', accessibility || '"');
    formData.append('compatibility', JSON.stringify(browers));
    formData.append('definition', definition);
    formData.append('description', description);
    formData.append('element', element);
    formData.append('reference', JSON.stringify(referSite));
    formData.append('summary', summary);
    formData.append('tag', tag);
    formData.append('title', title);
    formData.append('type', type);
    formData.append('use', use || String(0));

    if (imgList) {
      formData.append('thumbmnaile', imgList, imgList.name);
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    form.resetFields();
    setBrowers(browersOption);
    setReferSite([]);
    onClickImageDelete();
    return;
  };

  useEffect(() => {
    setInitialValues();
  }, [editing, setInitialValues]);

  return (
    <StyledReferenceForm
      form={form}
      onFinish={(values) => onFinish(values as ResponseReferenceProps)}
    >
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
                          <Radio.Group size="large">
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
                            <Radio value="-">없음</Radio>
                            <Radio value="인라인 구조(Inline Element)">
                              인라인 (Inline)
                            </Radio>
                            <Radio value="블록 구조(Block Element)">
                              블록 (Block)
                            </Radio>
                          </Radio.Group>
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
                        <InputLabel text="사용성" />
                        <Form.Item
                          className="create-wrapper-title"
                          name="use"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: '사용성을 입력해주세요.'
                          //   }
                          // ]}
                        >
                          <Rate />
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

                      <Space style={{ height: '4.6rem' }}>
                        <InputLabel text="썸네일" />
                        <Form.Item
                          name="thumbmnaile"
                          valuePropName="thumbmnaile"
                        >
                          <ImgUploader onChangeFile={onChangeFile} />
                          {fileList?.map((file, idx) => {
                            return (
                              <div
                                key={idx}
                                style={{
                                  float: 'left',
                                  // marginRight: '8px',
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
                                  src={file}
                                  alt=""
                                  width={80}
                                  height={80}
                                />
                              </div>
                            );
                          })}
                          {/* <Upload
                            accept=".png, .jpg, .jpeg"
                            listType="picture-card"
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
                          </Upload> */}
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
