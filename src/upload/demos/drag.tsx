import type { UploadProps } from "antd/es/upload";
import { Button, Upload, ConfigProvider } from "antd";
import React, { useState } from "react";
import zhCN from "antd/es/locale/zh_CN";
import { UploadFile, UploadListProps } from "antd/es/upload";
import { UploadListItem } from "./UploadListItem";
import { Clear } from "./UploadListItem/Clear";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const App: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "1",
      percent: 60,
      size: 999999,
      name: "我是超出一行文件的名称的文件我是超出一行文件的名称的文件.xlsx",
      status: "uploading",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
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
    console.log(file);

    setFileList(newFileList);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Dragger
        disabled={uploading}
        maxCount={3}
        onChange={onChange}
        {...props}
        fileList={fileList}
        itemRender={itemRender}
      >
        <p className="ant-upload-text">2M以内，xlsx / xls/ zip格式</p>
        <p className="ant-upload-title">将您的文件拖放到此处</p>
        <p className="ant-upload-hint">
          或者
          <Button
            disabled={uploading}
            type="link"
            size="small"
            style={{ fontSize: 14 }}
          >
            点击上传
          </Button>
        </p>

        {fileList.length > 1 && <Clear onClear={() => setFileList([])} />}
      </Dragger>
    </ConfigProvider>
  );
};
export default App;
