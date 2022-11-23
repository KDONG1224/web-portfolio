// base
import React from 'react';

// style
import { StyledAlgorithmForm } from './style';

// icons
import {
  IconBrandJavascript,
  IconKeyboard,
  IconSpeakerphone
} from '@tabler/icons';
import { MetaInputString } from 'components/Input';
import { useForm } from 'antd/lib/form/Form';
import { Button, Form } from 'antd';

interface AlgorithmFormProps {}

export const AlgorithmForm: React.FC<AlgorithmFormProps> = ({}) => {
  const [form] = useForm();

  return (
    <StyledAlgorithmForm
      form={form}
      onFinish={(values) => console.log('== values == : ', values)}
    >
      {/* <div className="detail-head-wrapper">
          <div className="detail-head">타이틀</div>
          <div className="detail-edit-btn">
            <Button>수정하기</Button>
          </div>
        </div> */}

      {/* 네모박스 */}
      <div id="sample1" className="sample">
        {/* 제목 */}
        <Form.Item name="title">
          <h2>
            <span>
              <MetaInputString style={{ width: 'calc(100% - 100px);' }} />
            </span>
            <span className="dot"></span>
          </h2>
        </Form.Item>

        {/* 문제 */}
        <Form.Item name="question">
          <p className="problem">
            <strong>Q : </strong> <br />
            <MetaInputString />
          </p>
        </Form.Item>
        <div className="desc">
          <dl>
            <dt>
              <span>
                <IconSpeakerphone />
              </span>
              <span>입력 설명</span>
            </dt>
            <dd>
              <Form.Item name="inputDesc">
                <MetaInputString />
              </Form.Item>
            </dd>
            <dt>
              <span>
                <IconSpeakerphone />
              </span>
              <span>출력 설명</span>
            </dt>
            <dd>
              <Form.Item name="outputDesc">
                <MetaInputString />
              </Form.Item>
            </dd>
          </dl>
        </div>
        <div className="sam">
          <dl>
            <dt>
              <span>
                <IconKeyboard />
              </span>
              <span>입력 예제</span>
            </dt>
            <dd>
              <Form.Item name="inputEx">
                <MetaInputString />
              </Form.Item>
            </dd>
            <dt>
              <span>
                <IconBrandJavascript />
              </span>
              <span>출력 예제</span>
            </dt>
            <dt>
              <Form.Item name="outputEx">
                <MetaInputString />
              </Form.Item>
            </dt>
          </dl>
        </div>
        <div className="code">
          <pre className="line-number">
            <code className="language-js"></code>
          </pre>
        </div>
      </div>
      <Button htmlType="submit">저장</Button>
      {/* <CommonCollapse
         className="answer-btn"
         code={answerCode}
         answer={isAnswer}
         onClick={onClickAnswer}
       /> */}
    </StyledAlgorithmForm>
  );
};
