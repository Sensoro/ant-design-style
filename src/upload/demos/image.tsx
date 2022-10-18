import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Space, ConfigProvider, Image } from "antd";
import React, { useState } from "react";
import { UploadFile, UploadProps } from "antd/es/upload";
import zhCN from "antd/es/locale/zh_CN";

import ImageFilled from "@sensoro-design/icons/ImageFilled";

const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const App = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 100,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
    {
      uid: "-6",
      name: "image.png",
      status: "error",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: any) => {
    if (file.status === "error") {
      return;
    }
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

  const uploadButton = (
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
  );

  return (
    <ConfigProvider locale={zhCN}>
      <Space size={32}>
        多张照片上传
        <Upload
          maxCount={6}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          iconRender={(file) => {
            if (file.status === "error") {
              return <ImageFilled />;
            }
            return "上传中";
          }}
        >
          {fileList.length >= 6 ? null : uploadButton}
        </Upload>
      </Space>

      <Modal
        width={480}
        open={previewOpen}
        title={previewTitle}
        footer={null}
        bodyStyle={{ overflowY: "auto" }}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </ConfigProvider>
  );
};

export default App;
