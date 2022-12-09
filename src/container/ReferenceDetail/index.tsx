// base
import { Rate } from 'antd';
import { BlurImage } from 'components';
import { useMedia } from 'hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// style
import { StyledReferenceDetail, StyledReferenceDetailMobile } from './style';

interface ReferenceDetailProps {
  data: any;
}

export const ReferenceDetail: React.FC<ReferenceDetailProps> = ({ data }) => {
  const { isMobile } = useMedia();

  const {
    id,
    title,
    type,
    tag,
    use,
    definition,
    element,
    summary,
    description,
    reference,
    compatibility,
    thumbmnaile
  } = data;

  return (
    <>
      {!isMobile && (
        <StyledReferenceDetail>
          <main id="main">
            <section id="explanation">
              <div className="container">
                <div className="title-wrapper">
                  <div className="title-image">
                    <BlurImage
                      src={thumbmnaile}
                      alt={title}
                      width={200}
                      height={200}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="title-header">
                    <h2>{`[${type.toUpperCase()}] ${title}`}</h2>
                    <p>{description}</p>
                  </div>
                </div>

                <hr />

                <h3>{title}</h3>
                <p className="blue">{summary}</p>

                <div className="table">
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
                        <td>{element}</td>
                      </tr>
                      <tr>
                        <th>닫는 태그</th>
                        <td>{tag}</td>
                      </tr>
                      {/* <tr>
                    <th>버전</th>
                    <td>{version}</td>
                  </tr> */}
                      {/* <tr>
                    <th>시각적 표현</th>
                    <td>{view}</td>
                  </tr> */}
                      <tr>
                        <th>사용성</th>
                        <td>
                          <Rate disabled defaultValue={use} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4>정의(Definition)</h4>
                <ul>
                  {definition[0].split('.').map((item: any) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4>호환성(Compatibility)</h4>
                <div className="table">
                  <table className="compatibility">
                    <colgroup>
                      <col style={{ width: '20%' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th></th>
                        {compatibility.map(({ name }: { name: string }) => (
                          <React.Fragment key={name}>
                            <th scope="col">
                              <div
                                className={`${name}-icon compatibility-icons`}
                              />
                            </th>
                          </React.Fragment>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row" className="ce">
                          {title}
                        </td>
                        {compatibility.map(({ isUse }: { isUse: boolean }) => (
                          <React.Fragment key={Math.random()}>
                            <td className="ce">
                              {isUse ? (
                                <span title="사용가능합니다.">⭕️</span>
                              ) : (
                                <span title="사용불가능합니다.">❌</span>
                              )}
                            </td>
                          </React.Fragment>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {reference && (
                  <>
                    <h4 className="pt30">참고 사이트(Reference)</h4>
                    <ul>
                      {reference.map(
                        ({ title, url }: { title: string; url: string }) => {
                          if (!title || !url) return;

                          return (
                            <React.Fragment key={`${id}-${title}`}>
                              <li>
                                <Link href={url as string}>{title}</Link>
                              </li>
                            </React.Fragment>
                          );
                        }
                      )}
                    </ul>
                  </>
                )}

                <hr />
              </div>
            </section>
          </main>
        </StyledReferenceDetail>
      )}

      {isMobile && (
        <StyledReferenceDetailMobile>
          <div className="datail-wrapper">
            <div className="datail-wrapper-top">
              <div className="datail-wrapper-top-header">
                <h2>{`[${type.toUpperCase()}] ${title}`}</h2>
                <p>{description}</p>
              </div>

              <div className="datail-wrapper-top-image">
                <BlurImage
                  src={thumbmnaile}
                  alt={title}
                  width={750}
                  height={750}
                  objectFit="cover"
                />
              </div>

              <div className="datail-wrapper-top-title">
                <h3>{title}</h3>
                <p className="blue">{summary}</p>
              </div>
            </div>

            <div className="detail-wrapper-middle" style={{ marginTop: 50 }}>
              <div className="detail-wrapper-middle-table">
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
                      <td>{element}</td>
                    </tr>
                    <tr>
                      <th>닫는 태그</th>
                      <td>{tag}</td>
                    </tr>
                    <tr>
                      <th>사용성</th>
                      <td>
                        <Rate disabled defaultValue={use} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </StyledReferenceDetailMobile>
      )}
    </>
  );
};
