import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import EditorComponent from 'components/post/EditorComponent';
import { NoticeContainer } from '@components/post/styles';
import axios from 'axios';
import 'components/post/NoticeStyles.scss';

const NoticeNewForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileList, setFileList] = useState([]);
  const history = useHistory();

  const handleFinish = () => {
    console.log(title, content);
    // axios.post('http://localhost:8000/notices/writing', {title, content, fileList})
  };
  const handleFinishFailed = () => {};
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };
  const onClickCancel = () => {
    history.push('/notices');
  };

  const onEditorChange = (content) => {
    setContent(content);
  };

  return (
    <NoticeContainer>
      <h2 style={{ fontSize: '1.5em', marginBottom: '1em', fontWeight: 'bold', textAlign: 'center' }}>게시글 작성</h2>
      <Form
        style={{ width: '100%' }}
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 32 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="제목" name="title" wrapperCol={{ span: 32 }}>
          <Input value={title} onChange={onChangeTitle} />
        </Form.Item>

        <Form.Item label="내용" name="contents" wrapperCol={{ span: 32 }}>
          <EditorComponent content={content} handler={onEditorChange} />
        </Form.Item>

        <Form.Item label="첨부파일" name="attachments">
          <Upload
            listType="text"
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={() => {
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
          <Button type="primary" htmlType="submit">
            작성하기
          </Button>
          <Button htmlType="button" onClick={onClickCancel}>
            취소
          </Button>
        </div>
      </Form>
    </NoticeContainer>
  );
};

export default NoticeNewForm;
