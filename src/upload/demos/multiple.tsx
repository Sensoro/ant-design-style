import type { UploadProps } from "antd";
import { Button, message, Upload, Space, ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";
import UploadFilled from "@sensoro-design/icons/UploadFilled";
import { Clear } from "./UploadListItem/Clear";

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
      uid: "0",
      percent: 50,
      name: "上传中状态.xlsx",
      status: "uploading",
      size: 212986,
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "1",
      percent: 60,
      size: 999999,
      name: "我是超出一行文件的名称的文件我是超出一行文件的名称的文件.xlsx",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "4",
      percent: 100,
      size: 999999,
      name: "校验状态.xlsx",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "2",
      name: "上传失败的demo.xlsx",
      status: "error",
      size: 142 * 1024,
    },
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

  const itemRender: UploadListProps["itemRender"] = (
    originNode,
    file,
    fileList,
    actions
  ) => {
    // console.log({ originNode, file, fileList, actions });
    return <UploadListItem file={file} onRemove={onRemove} />;
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
    console.log(file.percent, ": ", file.status);

    setFileList(newFileList);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Space direction="vertical" size={32}>
        <Upload
          onChange={onChange}
          {...props}
          fileList={fileList}
          itemRender={itemRender}
        >
          <Space>
            <Button disabled={uploading} type="primary" icon={<UploadFilled />}>
              选择文件
            </Button>
            支持 SVG 格式，可一次上传多个文件
          </Space>

          {fileList.length > 1 && <Clear onClear={() => setFileList([])} />}
        </Upload>
      </Space>
    </ConfigProvider>
  );
};

export default App;
