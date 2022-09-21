import type { UploadProps } from "antd";
import { Button, message, Upload, Space, ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";
import UploadFilled from "@sensoro-design/icons/UploadFilled";

import type { UploadListProps, UploadFile } from "antd/es/upload";

import { UploadListItem } from "./UploadListItem";

import zhCN from "antd/es/locale/zh_CN";

const props: UploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "0",
      percent: 50,
      name: "我是一行文件的名称.xlsx",
      status: "uploading",
      size: 212986,
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "1",
      percent: 60,
      size: 999999,
      name: "我是一行文件的名称.xlsx",
      status: "uploading",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "2",
      name: "我是一行文件的名称.xlsx",
      status: "error",
      size: 142 * 1024,
    },
  ]);

  const onRemove = (uid: string) => {
    setFileList((prev) => prev.filter((file) => file.uid !== uid));
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);

  const itemRender: UploadListProps["itemRender"] = (
    originNode,
    file,
    fileList,
    actions
  ) => {
    console.log({ originNode, file, fileList, actions });
    return <UploadListItem file={file} onRemove={onRemove} />;
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Space direction="vertical" size={32}>
        <Upload {...props} fileList={fileList} itemRender={itemRender}>
          <Space>
            <Button type="primary" icon={<UploadFilled />}>
              选择文件
            </Button>
            支持 SVG 格式
          </Space>
        </Upload>

        <Upload {...props}>
          <Space>
            <Button icon={<UploadFilled />}>选择文件</Button>
            支持 SVG 格式
          </Space>
        </Upload>
      </Space>
    </ConfigProvider>
  );
};

export default App;
