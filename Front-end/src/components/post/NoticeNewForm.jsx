import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import EditorComponent from 'components/post/EditorComponent';
import { NoticeContainer } from '@components/post/styles';
import useInput from 'utils/useInput';

const NoticeNewForm = () => {
  const [content, setContent] = useState('');
  const [fieldsErrors, setFieldsErrors] = useState([]);
  const [fileList, setFileList] = useState([]);
  const history = useHistory();

  const handleFinish = () => {};
  const handleFinishFailed = () => {};
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
      <Form
        style={{ width: '100%' }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="제목"
          name="title"
          wrapperCol={{ span: 32 }}
          rules={[{ required: true, message: '제목을 입력해주세요.' }]}
          {...fieldsErrors.title}
          {...fieldsErrors.non_field_errors}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="내용"
          name="contents"
          wrapperCol={{ span: 32 }}
          rules={[{ required: false, message: '내용을 입력해주세요.' }]}
          style={{ marginBottom: '60px' }}
          {...fieldsErrors.content}
          {...fieldsErrors.non_field_errors}
        >
          {/* <Input.TextArea autoSize={{ minRows: 10 }} /> */}
          <EditorComponent content={content} handler={onEditorChange} />
        </Form.Item>

        <Form.Item label="Attachments" name="attachments" {...fieldsErrors.attachments}>
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
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            작성하기
          </Button>
          <Button htmlType="button" onClick={onClickCancel}>
            취소
          </Button>
        </Form.Item>
      </Form>
    </NoticeContainer>
  );
};

export default NoticeNewForm;
