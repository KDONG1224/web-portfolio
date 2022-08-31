// base
import { NextPage } from 'next';
import Image from 'next/image';

// const
// import { SVZN_LOGO_V2 } from 'const';

const NotFoundPage: NextPage = () => {
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
        <div
          style={{
            width: '540px',
            height: '540px',
            backgroundColor: '#000'
          }}
        >
          {/* <Image src={SVZN_LOGO_V2} width={540} height={540} alt="" /> */}
        </div>
        <div
          style={{
            padding: '36px 0px',
            lineHeight: 1.5
          }}
        >
          <div>올바르지 않은 주소입니다</div>
          <div>확인 후 다시 시도해주세요.</div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
