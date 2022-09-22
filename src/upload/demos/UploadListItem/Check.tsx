import type { FC } from "react";
import LoadingOutlined from "@sensoro-design/icons/LoadingOutlined";
import { Space } from "antd";

export const UploadCheck: FC = () => {
  return (
    <Space size={4} style={{ fontSize: 12 }}>
      <LoadingOutlined style={{ color: "#2f54eb" }} /> 校验中...
    </Space>
  );
};
