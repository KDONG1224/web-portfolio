import { Button } from 'antd';
import dynamic from 'next/dynamic';
import React, { Dispatch, SetStateAction } from 'react';
import { EditorProps, EditorState } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);

const StyledWrapper = styled.div<{ readOnly: boolean; noPadding: boolean }>`
  padding: 16px;
  ${(props) =>
    props.readOnly ? '' : 'border: 1px solid black; border-radius: 8px;'}
  ${(props) => (props.noPadding ? '' : 'padding: 16px;')}
`;

interface CustomEditorProps {
  editorState: EditorState | undefined;
  readOnly?: boolean;
  noPadding?: boolean;
  onEditorStateChange?: (editorState: EditorState) => void;
}

export const CustomEditor: React.FC<CustomEditorProps> = ({
  editorState,
  readOnly = false,
  noPadding = false,
  onEditorStateChange
}) => {
  return (
    <StyledWrapper readOnly={readOnly} noPadding={noPadding}>
      <Editor
        editorState={editorState}
        toolbarClassName="editorToolbar-hidden"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType'],
          inline: { inDropdown: true }
        }}
        localization={{
          locale: 'ko'
        }}
      />
    </StyledWrapper>
  );
};
