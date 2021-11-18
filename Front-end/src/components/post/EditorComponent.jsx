import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ['clean'],
  ],
};
const EditorComponent = ({ content, handler }) => {
  //   const [value, setValue] = useState('');
  console.log(content);

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      value={content || ''}
      onChange={(content, delta, source, editor) => handler(editor.getHTML())}
      style={{ height: '300px' }}
    />
  );
};

export default EditorComponent;
