// base
import React, { useRef } from 'react';

// style
import { StyledImgUploader } from './style';

// libraries
import { Row } from 'antd';
import { MetaInputString } from 'components/Input';

interface ImgUploaderProps {
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImgUploader: React.FC<ImgUploaderProps> = ({ onChangeFile }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <StyledImgUploader>
      {/* <div className="header" style={{ float: 'none' }}>
        첨부파일
      </div> */}
      <input
        type="file"
        multiple
        onChange={onChangeFile}
        accept="image/*"
        style={{ display: 'none' }}
        ref={ref}
      />
      <Row className="input-wrapper" onClick={handleUpload}>
        {/* <div className="input-text">첨부파일. (10MB 이내)</div> */}
        <div className="input-plus">+</div>
      </Row>
    </StyledImgUploader>
  );
};
