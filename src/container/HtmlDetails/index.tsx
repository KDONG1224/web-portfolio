// base
import React from 'react';

// style
import { StyledHtmlDetails } from './style';

export const HtmlDetails = () => {
  return (
    <StyledHtmlDetails>
      <main id='main'>
        <section id='explanation'>
          <div className='container'>
            <h2>&lt;a&gt;</h2>
            <p>
              &lt;a&gt; 태그는 다른 페이지 이동을 설정합니다. 페이지 주소 뿐만
              아니라, 메일 주소, 전화 번호 등도 연결할 수 있으며, 아이디(#)
              값으로 페이지 내에서도 이동이 가능합니다.
            </p>

            <hr />

            <h3>&lt;a&gt;</h3>
            <p className='blue'>
              &lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.
            </p>

            <div className='table'>
              <table>
                <colgroup>
                  <col style={{ width: '30%' }} />
                  <col style={{ width: '70%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>특징</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>요소</th>
                    <td>인라인 구조(Inline Element)</td>
                  </tr>
                  <tr>
                    <th>닫는 태그</th>
                    <td>적용(&lt;a&gt; ~ &lt;/a&gt;)</td>
                  </tr>
                  <tr>
                    <th>버전</th>
                    <td>HTML4</td>
                  </tr>
                  <tr>
                    <th>시각적 표현</th>
                    <td>밑줄과 파란색으로 표시</td>
                  </tr>
                  <tr>
                    <th>사용성</th>
                    <td>★★★★★</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>정의(Definition)</h4>
            <ul>
              <li>
                &lt;a&gt; 태그는 클릭하면 다른 페이지로 이동합니다. 현재
                페이지에서 다른 페이지 URL로 연결하는 것을 하이퍼링크라고
                합니다.
              </li>
              <li>
                &lt;a&gt; 태그는 페이지 주소 뿐만 아니라, 메일 주소, 전화 번호
                등도 연결할 수 있습니다.
              </li>
              <li>&lt;a&gt; 태그는 아이디(#id)로 이동 할 수 있습니다.</li>
              <li>
                &lt;a&gt; 태그는 target 속성을 이용하면 새로운 브라우저 창에서
                페이지 이동을 할 수 있습니다.
              </li>
              <li>
                &lt;a&gt; 태그는 방문한 링크는 밑줄과 보라색으로 표시되고,
                활성화된 링크는 밑줄과 빨간색으로 표시됩니다.
              </li>
              <li>
                원칙적으로 &lt;a&gt; 태그는 블록구조를 포함 할 수 없지만,
                HTML5에서는 &lt;a&gt; 태그는 블록 요소를 포함할 수 있습니다.
              </li>
              <li>
                href="#"의 페이지 지정을 막기 위해 javascript:void(0)를 사용하는
                것보다 &lt;button&gt; 태그를 사용하는 것이 바람직합니다.
              </li>
            </ul>

            <h4>접근성(Accessibility)</h4>
            <ul>
              <li>
                링크를 통해 페이지 이동시 "페이지 이동" 및 "새로운 브라우저에서
                열림" 등의 메시지를 명시하여야 합니다.
              </li>
              <li>
                target="_blank" 속성을 사용할 경우 "새로운 브라우저에서 열림"
                등의 메세지를 명시하여야 스크린리더기를 사용하는 사용자에게
                도움을 줄 수 있습니다.
              </li>
            </ul>

            {/* 예제1(Sample) */}
            <h4>예제1(Sample)</h4>
            <div className='sample'>
              <h5>
                다른 페이지 이동(URL), 메일, 전화를 설정합니다.{' '}
                <span className='dot'>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </h5>
              <div className='sampleView'>
                <div>
                  <p>스터디 인원은 이번 주까지 모집합니다.</p>
                  <p>
                    참가 신청은{' '}
                    <a href='https://cafe.naver.com/crossbrowsing/10982'>
                      카페
                    </a>
                    에서 해주시면 됩니다.
                  </p>
                  <p>
                    참가 신청은 <a href='mailto:webstoryboy@naver.com'>메일</a>
                    로도 가능합니다.
                  </p>
                  <p>
                    당연히 <a href='tel:01093128004'>전화</a>로도 가능합니다.
                  </p>
                </div>
              </div>
              <div className='sampleBtnNone'>링크를 클릭하면 이동합니다.</div>
              <div className='sampleCode'>
                <div className='scMenu'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SCRIPT</div>
                </div>
                <div className='scCont'>
                  <div>
                    <pre>
                      <code className='language-html'>
                        &lt;p&gt;스터디 인원은 이번 주까지 모집합니다.&lt;/p&gt;
                        &lt;p&gt;참가 신청은 &lt;a
                        href="https://cafe.naver.com/crossbrowsing/10982"&gt;카페&lt;/a&gt;에서
                        해주시면 됩니다.&lt;/p&gt; &lt;p&gt;참가 신청은 &lt;a
                        href="mailto:webstoryboy@naver.com"&gt;메일&lt;/a&gt;로도
                        가능합니다.&lt;/p&gt; &lt;p&gt;당연히 &lt;a
                        href="tel:01093128004"&gt;전화&lt;/a&gt;로도
                        가능합니다.&lt;/p&gt;
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code className='language-css'>
                        {/* a {
color: #FF4B4C;
border-bottom: 1px solid #FF4B4C;
} */}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code className='language-javascript'>
                        //Javascript none
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 예제2(Sample) */}
            <h4 className='pt50'>예제2(Sample)</h4>
            <div className='sample'>
              <h5>
                아이디(#)로 이동합니다.
                <span className='dot' aria-hidden='true'>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </h5>
              <div className='sampleView'>
                <div>
                  <p>아이디 값을 넣으면 건너뛰기 기능을 제공합니다.</p>
                  <p>
                    <a href='#entry229Comment'>댓글을</a> 쓰고 싶다면
                    클릭해주세요!
                  </p>
                </div>
              </div>
              <div className='sampleBtnNone'>링크를 클릭하면 이동합니다.</div>
              <div className='sampleCode'>
                <div className='scMenu'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SCRIPT</div>
                </div>
                <div className='scCont'>
                  <div>
                    <pre>
                      <code className='language-html'>
                        &lt;p&gt;아이디 값을 넣으면 건너뛰기 기능을
                        제공합니다.&lt;/s&gt;&lt;/p&gt; &lt;p&gt;&lt;a
                        href="#entry229Comment"&gt;댓글을&lt;/a&gt; 쓰고 싶다면
                        클릭해주세요!&lt;/p&gt;
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code className='language-css'>
                        {/* a {
color: #FF4B4C;
border-bottom: 1px solid #FF4B4C;
} */}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code className='language-javascript'>//none</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <h4 className='pt50'>예제3(Sample)</h4>
            <div className='sample'>
              <h5>
                타겟을 설정하여 현재 브라우저 및 새로운 브라우저에서 보일 수
                있도록 설정합니다.{' '}
                <span className='dot' aria-hidden='true'>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </h5>
              <div className='sampleView'>
                <div>
                  <p>
                    타겟을 설정하면 새로운 브라우저 및 현재 브라우저에서 이동이
                    가능합니다.
                  </p>
                  <p>
                    <a href='https://wsss.tistory.com/' target='_blank'>
                      애니메이션
                    </a>{' '}
                    사이트를 새로운 창에서 보고 싶다면 클릭해주세요!
                  </p>
                  <p>
                    <a href='https://wsss.tistory.com/' target='_self'>
                      애니메이션
                    </a>{' '}
                    사이트를 현재 창에서 보고 싶다면 클릭해주세요!
                  </p>
                </div>
              </div>
              <div className='sampleBtnNone'>링크를 클릭하면 이동합니다.</div>
              <div className='sampleCode'>
                <div className='scMenu'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SCRIPT</div>
                </div>
                <div className='scCont'>
                  <div>
                    <pre>
                      <code className='language-html'>
                        &lt;div&gt; &lt;p&gt;타겟을 설정하면 새로운 브라우저 및
                        현재 브라우저에서 이동이 가능합니다.&lt;/s&gt;&lt;/p&gt;
                        &lt;p&gt;&lt;a href="https://wsss.tistory.com/"
                        target="_blank"&gt;애니메이션&lt;/a&gt; 사이트를 새로운
                        창에서 보고 싶다면 클릭해주세요!&lt;/p&gt;
                        &lt;p&gt;&lt;a href="https://wsss.tistory.com/"
                        target="_self"&gt;애니메이션&lt;/a&gt; 사이트를 현재
                        창에서 보고 싶다면 클릭해주세요!&lt;/p&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code className='language-css'>
                        {/* a {
                    color: #FF4B4C;
                    border-bottom: 1px solid #FF4B4C;
                    } */}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code className='language-javascript'>//none</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <h4>
              <a href='http://webzz.tistory.com/227'>호환성(Compatibility)</a>
            </h4>
            <div className='table'>
              <table className='compatibility'>
                <colgroup>
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th scope='col'>
                      <img
                        src='https://tistory1.daumcdn.net/tistory/2933724/skin/images/icon-chrome1.png'
                        alt='크롬 아이콘'
                        title='크롬 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory3.daumcdn.net/tistory/2933724/skin/images/icon-firefox1.png'
                        alt='파이어폭스 아이콘'
                        title='파이어폭스 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory1.daumcdn.net/tistory/2933724/skin/images/icon-safari1.png'
                        alt='사파리 아이콘'
                        title='사파리 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory3.daumcdn.net/tistory/2933724/skin/images/icon-opera1.png'
                        alt='오페라 아이콘'
                        title='오페라 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory1.daumcdn.net/tistory/2933724/skin/images/icon-whale1.png'
                        alt='네이버 웨일'
                        title='네이버 웨일 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory4.daumcdn.net/tistory/2933724/skin/images/icon-ie6.png'
                        alt='익스플로러6 아이콘'
                        title='인터넷 익스플로러6 브라우저'
                      />
                      <em>6</em>
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-ie7.png'
                        alt='익스플로러7 아이콘'
                        title='인터넷 익스플로러7 브라우저'
                      />
                      <em>7</em>
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-ie7.png'
                        alt='익스플로러8 아이콘'
                        title='인터넷 익스플로러8 브라우저'
                      />
                      <em>8</em>
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-ie9.png'
                        alt='익스플로러9 아이콘'
                        title='인터넷 익스플로러9 브라우저'
                      />
                      <em>9</em>
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-ie10.png'
                        alt='익스플로러10 아이콘'
                        title='인터넷 익스플로러10 브라우저'
                      />
                      <em>10</em>
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-ie11.png'
                        alt='익스플로러11 아이콘'
                        title='인터넷 익스플로러11 브라우저'
                      />
                      <em>11</em>
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory1.daumcdn.net/tistory/2933724/skin/images/icon-edge.png'
                        alt='엣지 아이콘'
                        title='엣지 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-android.png'
                        alt='안드로이드 아이콘'
                        title='모바일 안드로이드 브라우저'
                      />
                    </th>
                    <th scope='col'>
                      <img
                        src='https://tistory2.daumcdn.net/tistory/2933724/skin/images/icon-ios.png'
                        alt='ios 아이콘'
                        title='모바일 아이폰 브라우저'
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope='row' className='ce'>
                      &lt;a&gt;
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                    <td className='ce'>
                      <span title='사용가능합니다.'>○</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className='pt30'>참고 사이트(Reference)</h4>
            <ul>
              <li>
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'>
                  MDN
                </a>
              </li>
              <li>
                <a href='https://www.w3.org/TR/html52/textlevel-semantics.html#the-a-element'>
                  w3
                </a>
              </li>
            </ul>

            <hr />
          </div>
        </section>
      </main>
    </StyledHtmlDetails>
  );
};
