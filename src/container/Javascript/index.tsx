// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledJavascript } from './style';

// hooks
import { useMedia } from 'hooks';

// consts
import { javscriptMenus } from 'consts';
import { ROUTE_REFERNCE_DETAIL_JS_WITH_ID } from 'consts/route';

// libraries
import { Col, Row } from 'antd';

export const Javascript = () => {
  const router = useRouter();
  const { isMobile } = useMedia();

  const handleClick = (url: string) => {
    router.push(ROUTE_REFERNCE_DETAIL_JS_WITH_ID(url));
  };

  return (
    <StyledJavascript>
      <div id="wrap">
        <main id="contents">
          <h1>Javascript</h1>
          <p>자바스크립트 레퍼런스 북입니다.</p>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="menu"
            style={{
              marginLeft: isMobile ? 22 : 'auto',
              marginRight: isMobile ? 22 : 'auto'
            }}
          >
            {javscriptMenus.map(({ key, name, url }: any) => (
              <Col
                key={key}
                className="menu-col"
                span={isMobile ? 12 : 8}
                onClick={() => handleClick(url)}
                style={
                  isMobile
                    ? {
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginBottom: 20
                      }
                    : {
                        marginBottom: 60
                      }
                }
              >
                <div className="menu-item">{name}</div>
              </Col>
            ))}
          </Row>
        </main>
      </div>
    </StyledJavascript>
  );
};
