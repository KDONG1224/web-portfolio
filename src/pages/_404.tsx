// base
import { NextPage } from 'next';

// const
import { mainBanner } from 'consts';

// components
import { BlurImage } from 'components';

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
        <div>
          <BlurImage
            src={mainBanner.NOT_IMAGE}
            width={540}
            height={540}
            alt=""
          />
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
