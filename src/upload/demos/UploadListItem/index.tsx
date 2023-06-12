import type { FC } from "react";
import type { UploadFile } from "antd/es/upload";
import { Button, Progress, Tooltip } from "antd";

import { UploadCheck } from "./Check";

import FileFilled from "@sensoro-design/icons/FileFilled";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";
import ExclamationCircleFilled from "@sensoro-design/icons/ExclamationCircleFilled";

import "./index.less";

interface UploadListItemProps {
  file: UploadFile;
  onRemove?: (uid: string) => void;
  onReload?: (file: UploadFile) => void;
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
    size = Math.round(limit / 1024) + "KB";
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

export const UploadListItem: FC<UploadListItemProps> = ({
  file,
  onRemove,
  onReload,
}) => {
  const progressEle = () => {
    if (file.status === "uploading") {
      if (file.percent === 100) {
        return <UploadCheck />;
      }

      return <Progress percent={Math.floor(file.percent || 0)} />;
    }

    if (file.status === "error") {
      return (
        <div className={`${prefixCls}-content-progress-error`}>
          <ExclamationCircleFilled style={{ marginRight: 4 }} />
          上传失败
          <Button type="link" size="small" onClick={() => onReload?.(file)}>
            重试
          </Button>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`${prefixCls}${
        file.status === "error" ? ` ${prefixCls}-error` : ""
      }`}
    >
      <span className={`${prefixCls}-icon`}>
        <FileFilled />
      </span>
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-content-line`}>
          <Tooltip title={file.name}>
            <span className={`${prefixCls}-content-title`}>{file.name}</span>
          </Tooltip>
          <span className={`${prefixCls}-content-size`}>
            {changeSize(file.size as number)}
          </span>
        </div>
        {progressEle()}
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
