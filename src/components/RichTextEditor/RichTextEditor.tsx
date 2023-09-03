import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { default as _Editor } from 'react-draft-wysiwyg';
import { Card } from '@material-ui/core';
import { convertFromHTML, ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Props } from './types';

const Editor = (_Editor as unknown) as React.FC<PropsWithChildren<any>>;

export const RichTextEditor: FC<Props> = ({ html, onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!updated && html) {
      const blocksFromHtml = convertFromHTML(html);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, [html, updated]);

  const handleChange = (editorState: EditorState) => {
    setUpdated(true);
    setEditorState(editorState);

    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <Card>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleChange}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'colorPicker', 'emoji', 'remove', 'history'],
        }}
        wrapperStyle={{
          height: 200
        }}
      />
    </Card>
  )
};
