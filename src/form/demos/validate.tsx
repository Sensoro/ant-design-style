import { Button, Upload, Form, Input, Modal, Radio, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { UploadFile, UploadProps } from "antd/es/upload";

const { Option } = Select;

import { getBase64 } from "../../upload/demos/image-single";

const App: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <>
      <Form
        name="basic"
        colon={false}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ gender: "male" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="房主照片"
          name="picture"
          extra="这是备注信息~"
          help="快传一张照片~"
          validateStatus="error"
        >
          <Upload
            maxCount={1}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            onPreview={handlePreview}
            style={{ marginBottom: 6 }}
          >
            {fileList.length >= 1 ? null : (
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  上传图片
                </div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          validateStatus="error"
          label="姓名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          help="这是错误校验"
        >
          <Input placeholder="请输入姓名" style={{ width: 240 }} />
        </Form.Item>

        <Form.Item
          validateStatus="error"
          label="性别"
          name="gender"
          help="这是错误校验"
          rules={[{ required: true, message: "Please input your gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          validateStatus="error"
          label="证件号码"
          name="IDCard"
          help="这是错误校验"
          rules={[{ required: true, message: "Please input your IDCard!" }]}
        >
          <Input.Group compact>
            <Select defaultValue="id" style={{ width: 120 }}>
              <Option value="id">身份证</Option>
            </Select>
            <Input style={{ width: 240 }} placeholder="请输入" />
          </Input.Group>
        </Form.Item>

        <Form.Item
          validateStatus="error"
          label="手机号码"
          name="phone"
          help="这是错误校验"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input placeholder="请输入手机号码" style={{ width: 240 }} />
        </Form.Item>

        <Form.Item
          help="这是错误校验"
          validateStatus="error"
          label="备注信息"
          name="remark"
          rules={[{ required: true, message: "Please input your remark!" }]}
        >
          <Input.TextArea placeholder="请输入备注信息" style={{ width: 240 }} />
        </Form.Item>

        <Form.Item validateStatus="error" wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
      <Modal
        width={480}
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default App;
