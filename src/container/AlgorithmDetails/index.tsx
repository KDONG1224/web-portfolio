// base
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithmDetails } from './style';

// const
import { algorithmInfo } from 'consts';

// components
import { AlgorithmQuestion1 } from './AlgorithmQuestions';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Highlight from 'react-highlight';

export interface AlgorithmQuestionProps {
  questionList: any;
  edit?: boolean;
}

interface AlgorithmDetailsProps {
  data: any;
}

export const AlgorithmDetails: React.FC<AlgorithmDetailsProps> = ({ data }) => {
  const {
    grassDifferCode,
    grassDifferDesc,
    grassMyCode,
    grassMyDesc,
    hint,
    id,
    level,
    question,
    title,
    type
  } = data;

  return (
    <StyledAlgorithmDetails>
      <div className="algo-wrapper">
        <div className="algo-wrapper-title">
          <span>
            {type === 'backJun' ? '백준' : '프로그래머스'} 코딩테스트 연습
            문제지
          </span>
          <h1>코딩 영역</h1>
          <em>Lv.{level}</em>
        </div>
        <div className="algo-wrapper-info">
          <table className="algo-wrapper-info-table" style={{ width: '30%' }}>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
            <tbody>
              <tr>
                <td>성명</td>
                <td>KDONG</td>
              </tr>
            </tbody>
          </table>
          <table className="algo-wrapper-info-table" style={{ width: '50%' }}>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col />
              <col />
              <col />
              <col style={{ width: '2%' }} />
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
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>-</td>
                <td>2</td>
                <td>3</td>
                <td>7</td>
                <td>7</td>
                <td>-</td>
                <td>2</td>
                <td>4</td>
                <td>1</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="algo-wrapper-question">
          <span>{title}</span>
          {question}
          <em
            dangerouslySetInnerHTML={{
              __html: hint
            }}
          />
        </div>
        <div className="algo-wrapper-code my">
          <Highlight className="javascript">
            <div
              className="algo-wrapper-code-view"
              dangerouslySetInnerHTML={{ __html: JSON.parse(grassMyCode) }}
            />
          </Highlight>
        </div>
        <div className="algo-wrapper-answer my">
          <span>나의 풀이</span>
          {grassMyDesc}
        </div>
        <div className="algo-wrapper-code another">
          <Highlight className="javascript">
            <div
              className="algo-wrapper-code-view"
              dangerouslySetInnerHTML={{ __html: JSON.parse(grassDifferCode) }}
            />
          </Highlight>
        </div>
        <div className="algo-wrapper-answer another">
          <span>다른 풀이</span>
          {grassDifferDesc}
        </div>
      </div>
    </StyledAlgorithmDetails>
  );
};
