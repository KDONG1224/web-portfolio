// base
import React, { useState } from 'react';

// style
import { StyledAlgorithmDetails } from './style';

// libraries
import Highlight from 'react-highlight';
import {
  EditOutlined,
  SoundOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import { Radio } from 'antd';

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

  const [select, setSelect] = useState('design1');

  const options = [
    { label: '디자인1', value: 'design1' },
    { label: '디자인2', value: 'design2' }
  ];

  const onChange = (value: string) => {
    setSelect(value);
  };

  return (
    <StyledAlgorithmDetails>
      {/* <div className="select-box">
        <Radio.Group
          options={options}
          onChange={(e) => onChange(e.target.value)}
          value={select}
          optionType="button"
          buttonStyle="solid"
        />
      </div> */}

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

        {/* design1 */}
        {select === 'design1' && (
          <div className="algo-wrapper-design1">
            <div id="sample" className="sample">
              <h2>
                {title} <span className="dot"></span>
              </h2>
              <p className="problem">
                <strong>Q : </strong>
                {question}
              </p>
              <div className="desc">
                <dl>
                  <dt>
                    <span>
                      <EditOutlined /> 입력 설명
                    </span>
                  </dt>
                  {hint.split('/').map((text: any, idx: number) => (
                    <dd key={idx}>{text}</dd>
                  ))}
                  {/* <dd
                    dangerouslySetInnerHTML={{
                      __html: hint
                    }}
                  /> */}
                  {/* <dt>
       <HighlightOutlined /> 출력 설명
     </dt>
     <dd>첫 번째 줄에 가장 작은 수를 출력한다.</dd> */}
                </dl>
              </div>
              {/* <div className="sam">
   <dl>
     <dt>
       <SendOutlined /> 입력 예제
     </dt>
     <dd>10 50 85</dd>
     <dt>
       <SoundOutlined /> 출력 예제
     </dt>
     <dt>10</dt>
   </dl>
 </div> */}
              <div className="code">
                <div className="algo-wrapper-code my">
                  <Highlight className="javascript">
                    <div
                      className="algo-wrapper-code-view"
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(grassMyCode)
                      }}
                    />
                  </Highlight>
                </div>
                <div className="algo-wrapper-answer my">
                  <span>
                    <SoundOutlined /> 나의 풀이
                  </span>
                  {grassMyDesc}
                </div>
                <div className="algo-wrapper-code another">
                  <Highlight className="javascript">
                    <div
                      className="algo-wrapper-code-view"
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(grassDifferCode)
                      }}
                    />
                  </Highlight>
                </div>
                <div className="algo-wrapper-answer another">
                  <span>
                    <UserAddOutlined /> 다른 풀이
                  </span>
                  {grassDifferDesc}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* design2 */}
        {select === 'design2' && (
          <div className="algo-wrapper-design2">
            <div className="algo-wrapper-design2-question">
              <span>{title}</span>
              {question}
              <em
                dangerouslySetInnerHTML={{
                  __html: hint
                }}
              />
            </div>
            <div className="algo-wrapper-design2-code my">
              <Highlight className="javascript">
                <div
                  className="algo-wrapper-design2-code-view"
                  dangerouslySetInnerHTML={{ __html: JSON.parse(grassMyCode) }}
                />
              </Highlight>
            </div>
            <div className="algo-wrapper-design2-answer my">
              <span>나의 풀이</span>
              {grassMyDesc}
            </div>
            <div className="algo-wrapper-design2-code another">
              <Highlight className="javascript">
                <div
                  className="algo-wrapper-design2-code-view"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(grassDifferCode)
                  }}
                />
              </Highlight>
            </div>
            <div className="algo-wrapper-design2-answer another">
              <span>다른 풀이</span>
              {grassDifferDesc}
            </div>
          </div>
        )}
      </div>
    </StyledAlgorithmDetails>
  );
};
