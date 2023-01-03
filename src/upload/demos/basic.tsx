import type { UploadProps } from "antd";
import { Button, Upload, Space, ConfigProvider } from "antd";
import React, { useState } from "react";
import UploadOutlined from "@sensoro-design/icons/UploadOutlined";
import type { UploadListProps, UploadFile } from "antd/es/upload";

import { UploadListItem } from "./UploadListItem";

import zhCN from "antd/es/locale/zh_CN";

const props: UploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
};

const App: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "3",
      name: "上传完成的demo.png",
      status: "done",
      size: 1.16 * 1024 * 1024,
    },
  ]);

  const onRemove = (uid: string) => {
    setFileList((prev) => prev.filter((file) => file.uid !== uid));
  };

  const onReload = () => {};

  const itemRender: UploadListProps["itemRender"] = (
    originNode,
    file,
    fileList,
    actions
  ) => {
    // console.log({ originNode, file, fileList, actions });
    return (
      <UploadListItem file={file} onRemove={onRemove} onReload={onReload} />
    );
  };

  const onChange: UploadProps["onChange"] = ({ file, fileList, event }) => {
    let newFileList = [...fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = fileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // set loading
    setUploading(file.status === "uploading");
    setFileList(newFileList);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Space direction="vertical" size={32}>
        <Space direction="vertical" size={32}>
          <Upload
            maxCount={1}
            onChange={onChange}
            {...props}
            fileList={fileList}
            itemRender={itemRender}
          >
            <Space>
              <Button
                disabled={uploading || fileList.length >= 1}
                icon={<UploadOutlined />}
              >
                选择文件
              </Button>
              支持 SVG 格式
            </Space>
          </Upload>
        </Space>
      </Space>
    </ConfigProvider>
  );
};

export default App;
