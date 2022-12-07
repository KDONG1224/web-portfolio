// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithmDetails } from './style';

// const
import { algorithmInfo } from 'consts';

// components
import { AlgorithmQuestion1 } from './AlgorithmQuestions';
import { CodeBlock, dracula } from 'react-code-blocks';

export interface AlgorithmQuestionProps {
  questionList: any;
  edit?: boolean;
}

interface AlgorithmDetailsProps {}

export const AlgorithmDetails: React.FC<AlgorithmDetailsProps> = ({}) => {
  const code1 = `function solution(n) {
    for(let x = 1; x<=n; x++){
        if(n % x == 1){
            return x;
        };
    };
};`;

  const code2 = `function solution(n, x = 1) {    
  while (x++) {
      if (n % x === 1) {
          return x;
      }
  }    
}`;

  return (
    <StyledAlgorithmDetails>
      <div className="algo-wrapper">
        <div className="algo-wrapper-title">
          <span>프로그래머스 코딩테스트 연습 문제지</span>
          <h1>코딩 영역</h1>
          <em>Lv.1</em>
        </div>
        <div className="algo-wrapper-info">
          <table className="algo-wrapper-info-table" style={{ width: '30%' }}>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
          </table>
          <table className="algo-wrapper-info-table" style={{ width: '50%' }}>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col />
              <col />
              <col />
              <col />
              <col style={{ width: '2%' }} />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>수험 번호</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>-</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="algo-wrapper-question">
          <span>나머지가 1이 되는 수 찾기</span>
          {
            '05. 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.'
          }
          <em>
            {'* n은 길이 10,000이하인 자연수입니다.'}
            <br />
            {'ex) n=3 => return = "수박수", n=4 => return = "수박수박"'}
          </em>
        </div>
        <div className="algo-wrapper-code my">
          <CodeBlock
            text={code1}
            language="javascript"
            showLineNumbers
            startingLineNumber
            theme={dracula}
          />
        </div>
        <div className="algo-wrapper-answer my">
          <span>나의 풀이</span>
          x=1부터 n까지 반복하는 동안 나머지가 1이 나오는 가장 작은 수를
          리턴합니다.
        </div>
        <div className="algo-wrapper-code another">
          <CodeBlock
            text={code2}
            language="javascript"
            showLineNumbers
            startingLineNumber
            theme={dracula}
          />
        </div>
        <div className="algo-wrapper-answer another">
          <span>다른 풀이</span>
          기본값을 설정 후 while 문에서 증감 연산자를 사용하여 구해주었네요.
        </div>
      </div>
    </StyledAlgorithmDetails>
  );
};
