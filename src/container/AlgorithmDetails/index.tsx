// base
import React, { useState } from 'react';

// style
import { StyledAlgorithmDetails } from './style';

// library
import {
  createFromIconfontCN,
  EditOutlined,
  SoundOutlined
} from '@ant-design/icons';

// components
import { CommonCollapse } from 'components';

// const
import { algorithmInfo } from 'const';

interface AlgorithmDetailsProps {
  id: string;
}

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js']
});

export const AlgorithmDetails: React.FC<AlgorithmDetailsProps> = ({ id }) => {
  const [isAnswer, setIsAnswer] = useState<string>('');

  console.log('id : ', id);

  const check = algorithmInfo.filter(x => x.key === id)[0];

  const {
    question,
    questionInfo,
    questionEx,
    title,
    outputEx,
    outputInfo,
    answerCode
  } = check.data;

  const solution01 = (a: number, b: number, c: number) => {
    let answer: number = 0;

    if (a < b) {
      answer = a;
    }

    if (c < answer) {
      answer = c;
    }

    return setIsAnswer(String(answer));
  };

  const onClickAnswer = () => {
    if (id === 'algorithm-01') return solution01(10, 50, 85);
  };

  return (
    <StyledAlgorithmDetails>
      <div className='detail-head'>{title}</div>
      <div id='sample1' className='sample'>
        <h2>
          {title} <span className='dot'></span>
        </h2>
        <p className='problem'>
          <strong>Q : </strong> <br />
          {question}
        </p>
        <div className='desc'>
          <dl>
            <dt>
              <SoundOutlined /> 입력 설명
            </dt>
            <dd>{questionInfo}</dd>
            <dt>
              <SoundOutlined /> 출력 설명
            </dt>
            <dd>{outputInfo}</dd>
          </dl>
        </div>
        <div className='sam'>
          <dl>
            <dt>
              <EditOutlined /> 입력 예제
            </dt>
            <dd>{questionEx}</dd>
            <dt>
              <IconFont type='icon-javascript' /> 출력 예제
            </dt>
            <dt>{outputEx}</dt>
          </dl>
        </div>
        <div className='code'>
          <pre className='line-number'>
            <code className='language-js'></code>
          </pre>
        </div>
      </div>
      <CommonCollapse
        className='answer-btn'
        code={answerCode}
        answer={isAnswer}
        onClick={onClickAnswer}
      />
    </StyledAlgorithmDetails>
  );
};
