// base
import React from 'react';

// style
import {
  AffixStyled,
  InputStringStyled,
  PrefixStyled,
  TextAreaStringStyled
} from './style';

// libraries
import { InputProps, TextAreaProps } from 'antd/lib/input';

interface MetaInputStringProps extends InputProps {
  affix?: React.ReactNode;
  prefixNode?: React.ReactNode;
  labelWidth?: string;
}

export const MetaInputString = (props: MetaInputStringProps) => {
  const { prefixNode, affix, labelWidth, ...rest } = props;

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      {prefixNode && (
        <PrefixStyled labelWidth={labelWidth}>{prefixNode}</PrefixStyled>
      )}
      <InputStringStyled {...rest} />
      {affix && <AffixStyled>{affix}</AffixStyled>}
    </div>
  );
};

interface MetaTextAreaProps extends TextAreaProps {
  affix?: React.ReactNode;
  prefixNode?: React.ReactNode;
  labelWidth?: string;
}

export const MetaTextArea = (props: MetaTextAreaProps) => {
  const { prefixNode, affix, labelWidth, ...rest } = props;

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      {prefixNode && (
        <PrefixStyled labelWidth={labelWidth}>{prefixNode}</PrefixStyled>
      )}
      {/* <TextAreaStringStyled {...rest} /> */}
      {affix && <AffixStyled>{affix}</AffixStyled>}
    </div>
  );
};
