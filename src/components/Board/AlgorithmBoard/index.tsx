// base
import React from 'react';

// style
import { StyledAlgorithmBoard } from './style';

// library
import {
  IconSpeakerphone,
  IconKeyboard,
  IconBrandJavascript
} from '@tabler/icons';
import { Button } from 'antd';

// components
import { CommonCollapse } from 'components';

interface AlgorithmBoardProps {
  questionList?: any;
}

export const AlgorithmBoard: React.FC<AlgorithmBoardProps> = ({
  questionList
}) => {
  // const {
  //   question,
  //   questionInfo,
  //   questionEx,
  //   title,
  //   outputEx,
  //   outputInfo,
  //   answerCode
  // } = questionList;

  return (
    <StyledAlgorithmBoard>
      <>
        {/* 타이틀 */}
        <div className="detail-head-wrapper">
          <div className="detail-head">타이틀</div>
          <div className="detail-edit-btn">
            <Button>수정하기</Button>
          </div>
        </div>

        {/* 네모박스 */}
        <div id="sample1" className="sample">
          {/* 제목 */}
          <h2>
            제목 <span className="dot"></span>
          </h2>

          {/* 문제 */}
          <p className="problem">
            <strong>Q : </strong> <br />
            문제
          </p>
          <div className="desc">
            <dl>
              <dt>
                <span>
                  <IconSpeakerphone />
                </span>
                <span>입력 설명</span>
              </dt>
              <dd>입력 설명</dd>
              <dt>
                <span>
                  <IconSpeakerphone />
                </span>
                <span>출력 설명</span>
              </dt>
              <dd>출력 설명</dd>
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
              <dd>입력 예제</dd>
              <dt>
                <span>
                  <IconBrandJavascript />
                </span>
                <span>출력 예제</span>
              </dt>
              <dt>출력 예제</dt>
            </dl>
          </div>
          <div className="code">
            <pre className="line-number">
              <code className="language-js"></code>
            </pre>
          </div>
        </div>
        {/* <CommonCollapse
         className="answer-btn"
         code={answerCode}
         answer={isAnswer}
         onClick={onClickAnswer}
       /> */}
      </>
    </StyledAlgorithmBoard>
  );
};
