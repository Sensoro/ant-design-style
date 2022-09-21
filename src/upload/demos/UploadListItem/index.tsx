import type { FC } from "react";
import type { UploadFile } from "antd/es/upload";
import { Progress, Space } from "antd";

import FileTextFilled from "@sensoro-design/icons/FileTextFilled";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

import "./index.less";

interface UploadListItemProps {
  file: UploadFile;
  onRemove?: (uid: string) => void;
}

const keepTwoDecimal = (num: number) => Math.round(num * 100) / 100;

function changeSize(limit: number) {
  if (!limit) {
    return "";
  }
  let size = "";
  if (limit < 1024) {
    //如果小于1KB转化成B
    size = limit + "B";
  } else if (limit < 1024 * 1024) {
    //如果小于1MB转化成KB
    size = keepTwoDecimal(limit / 1024) + "KB";
  } else if (limit < 1024 * 1024 * 1024) {
    //如果小于1GB转化成MB
    size = keepTwoDecimal(limit / (1024 * 1024)) + "MB";
  } else {
    //其他转化成GB
    size = keepTwoDecimal(limit / (1024 * 1024 * 1024)) + "GB";
  }
  return size;
}

const prefixCls = "ant-upload-list-item-custom";

export const UploadListItem: FC<UploadListItemProps> = ({ file, onRemove }) => {
  return (
    <div
      className={`${prefixCls} ${
        file.status === "error" && `${prefixCls}-error`
      }`}
    >
      <span className={`${prefixCls}-icon`}>
        <FileTextFilled />
      </span>
      <div className={`${prefixCls}-content`}>
        <div>
          <span className={`${prefixCls}-content-title`}>{file.name}</span>
          <span className={`${prefixCls}-content-size`}>
            {changeSize(file.size as number)}
          </span>
        </div>
        <Progress percent={file.percent} />
      </div>
      <span
        className={`${prefixCls}-close`}
        onClick={() => onRemove?.(file.uid)}
      >
        <CloseOutlined />
      </span>
    </div>
  );
};
