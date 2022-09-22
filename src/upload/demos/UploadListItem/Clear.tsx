import { Button } from "antd";
import type { FC } from "react";

import "./index.less";

interface ClearProps {
  prefixCls?: string;
  onClear?: () => void;
}

export const Clear: FC<ClearProps> = ({
  onClear,
  prefixCls = "ant-upload-list-clear",
}) => {
  return (
    <div className={prefixCls}>
      <span>已选选择文件</span>
      <Button
        type="link"
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onClear?.();
        }}
      >
        清空
      </Button>
    </div>
  );
};
