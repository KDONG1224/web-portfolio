/* eslint-disable react/display-name */
import React from 'react';

import { InputNumber, Space } from 'antd';
import { InputNumberProps } from 'antd/lib/input-number';
import { AffixStyled, InputNumberStyled, PrefixStyled } from './style';

interface MetaInputNumberProps extends InputNumberProps {
  affix?: React.ReactNode;
  prefixNode?: React.ReactNode;
}

const MetaInputNumber = React.forwardRef<
  HTMLInputElement,
  MetaInputNumberProps
>((props, ref) => {
  const { prefixNode, affix, ...rest } = props;

  return (
    <Space style={{ position: 'relative' }} size={10}>
      {prefixNode && <PrefixStyled>{prefixNode}</PrefixStyled>}
      <InputNumberStyled ref={ref} {...rest} />
      {affix && <AffixStyled>{affix}</AffixStyled>}
    </Space>
  );
});

export default React.memo(MetaInputNumber);
