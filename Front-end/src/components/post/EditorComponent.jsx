import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'components/post/EditorStyles.scss';

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background',
];

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }, { color: [] }, { background: [] }],
    ['clean'],
  ],
};
const EditorComponent = ({ content, handler }) => {
  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      value={content || ''}
      onChange={(content, delta, source, editor) => handler(editor.getHTML())}
    />
  );
};

export default EditorComponent;
