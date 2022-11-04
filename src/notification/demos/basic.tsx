import { Button, notification, Space } from "antd";
import type { FC } from "react";

export type NotificationType = "success" | "info" | "warning" | "error";

const openNotification = () => {
  notification.open({
    message: "通知标题",
    description: "这是一行通知内容的简介",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const openNotificationWithIcon = (type: NotificationType) => {
  notification[type]({
    duration: 0,
    message: "通知标题",
    description:
      "这是一个需要换行的内容，这是一个需要换行的内容，这是一个需要换行的内容",
  });
};

const App: FC = () => (
  <Space>
    <Button type="primary" onClick={openNotification}>
      基本样式
    </Button>
    <Button onClick={() => openNotificationWithIcon("success")}>Success</Button>
    <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
    <Button onClick={() => openNotificationWithIcon("warning")}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
  </Space>
);

export default App;
