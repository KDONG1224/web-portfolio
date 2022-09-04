// base
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

// hooks
import { useInterval } from 'hooks';

// const
import { mainBanner } from 'const';

const ErrorPage: NextPage = () => {
  const router = useRouter();
  const [state, setState] = useState(5);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (state < 1) {
      setIsRunning(false);
      const prevPath = globalThis.sessionStorage.getItem('prevPath');
      if (prevPath) router.back();
      else router.push('/');
    }
  }, [state]);

  useInterval(
    () => {
      setState(state - 1);
    },
    isRunning ? 1000 : null
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Pretendard-Bold',
        fontSize: 28,
        textAlign: 'center'
      }}
    >
      <div>
        <div>
          <Image src={mainBanner.NOT_IMAGE} width={540} height={540} alt="" />
        </div>
        <div
          style={{
            padding: '36px 0px',
            lineHeight: 1.5
          }}
        >
          <div>불편을 드려 죄송합니다.</div>
          <div>잠시 후 다시 시도해주세요.</div>
          <div>{state}초 뒤 이전 페이지로 돌아갑니다</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
