import { Button, Modal, Space } from "antd";

import CloseCircleFilled from "@sensoro-design/icons/CloseCircleFilled";

import type { ReactNode } from "react";
import CheckCircleFilled from "@sensoro-design/icons/CheckCircleFilled";
import InfoCircleFilled from "@sensoro-design/icons/InfoCircleFilled";

export type NotificationType = "success" | "info" | "warning" | "error";

export const iconMap: Record<NotificationType, ReactNode> = {
  success: <CheckCircleFilled style={{ color: "#1acb7c" }} />,
  error: <CloseCircleFilled style={{ color: "#f72231" }} />,
  info: <InfoCircleFilled style={{ color: "#2b6de5" }} />,
  warning: <InfoCircleFilled style={{ color: "#f9aa06" }} />,
};

const confirm = (type: NotificationType) => {
  Modal.confirm({
    width: 480,
    title: "确认将房间（房间001）从系统中移除？",
    icon: iconMap[type],
    content:
      "这是一行描述文案这是一行描述文案这是一行描述文案这是一行描述文案这是一行描述文案这是一行",
    okText: "确认",
    cancelText: "取消",
  });
};

const App = () => (
  <Space>
    <Button onClick={() => confirm("info")}>info</Button>
    <Button onClick={() => confirm("success")}>success</Button>
    <Button onClick={() => confirm("warning")}>warning</Button>
    <Button onClick={() => confirm("error")}>error</Button>
  </Space>
);

export default App;
