// base
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithmQuestion } from '../style';

// library
import {
  IconSpeakerphone,
  IconKeyboard,
  IconBrandJavascript
} from '@tabler/icons';

// components
import { AlgorithmBoard, AlgorithmForm, CommonCollapse } from 'components';

// containers
import { AlgorithmQuestionProps } from 'container';
import { Button } from 'antd';

interface AlgorithmQuestion1Props extends AlgorithmQuestionProps {}

export const AlgorithmQuestion1: React.FC<AlgorithmQuestion1Props> = ({
  questionList,
  edit = false
}) => {
  const [isAnswer, setIsAnswer] = useState<string>('');

  const router = useRouter();
  const { key } = router.query;

  const {
    question,
    questionInfo,
    questionEx,
    title,
    outputEx,
    outputInfo,
    answerCode
  } = questionList;

  const solution = (a: number, b: number, c: number) => {
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
    solution(10, 50, 85);
  };

  return (
    // <StyledAlgorithmQuestion>
    //   {!edit ? (
    //     <>
    //       {/* 타이틀 */}
    //       <div className="detail-head-wrapper">
    //         <div className="detail-head">
    //           {title} {key}
    //         </div>
    //         <div className="detail-edit-btn">
    //           <Button>수정하기</Button>
    //         </div>
    //       </div>

    //       {/* 네모박스 */}
    //       <div id="sample1" className="sample">
    //         {/* 제목 */}
    //         <h2>
    //           {title} <span className="dot"></span>
    //         </h2>

    //         {/* 문제 */}
    //         <p className="problem">
    //           <strong>Q : </strong> <br />
    //           {question}
    //         </p>
    //         <div className="desc">
    //           <dl>
    //             <dt>
    //               <span>
    //                 <IconSpeakerphone />
    //               </span>
    //               <span>입력 설명</span>
    //             </dt>
    //             <dd>{questionInfo}</dd>
    //             <dt>
    //               <span>
    //                 <IconSpeakerphone />
    //               </span>
    //               <span>출력 설명</span>
    //             </dt>
    //             <dd>{outputInfo}</dd>
    //           </dl>
    //         </div>
    //         <div className="sam">
    //           <dl>
    //             <dt>
    //               <span>
    //                 <IconKeyboard />
    //               </span>
    //               <span>입력 예제</span>
    //             </dt>
    //             <dd>{questionEx}</dd>
    //             <dt>
    //               <span>
    //                 <IconBrandJavascript />
    //               </span>
    //               <span>출력 예제</span>
    //             </dt>
    //             <dt>{outputEx}</dt>
    //           </dl>
    //         </div>
    //         <div className="code">
    //           <pre className="line-number">
    //             <code className="language-js"></code>
    //           </pre>
    //         </div>
    //       </div>
    //       <CommonCollapse
    //         className="answer-btn"
    //         code={answerCode}
    //         answer={isAnswer}
    //         onClick={onClickAnswer}
    //       />
    //     </>
    //   ) : (
    //     <AlgorithmForm />
    //   )}
    // </StyledAlgorithmQuestion>
    <>
      <AlgorithmBoard />
    </>
  );
};
