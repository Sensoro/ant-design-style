import { Button, notification, Space } from "antd";
import type { FC } from "react";

import type { NotificationType } from "./basic";

const openNotificationWithIcon = (type: NotificationType) => {
  notification[type]({
    className: `ant-notification-notice-${type}-filled`,
    duration: 0,
    message: "通知标题",
    description:
      "这是一个需要换行的内容，这是一个需要换行的内容，这是一个需要换行的内容",
  });
};

const App: FC = () => (
  <Space>
    <Button onClick={() => openNotificationWithIcon("success")}>Success</Button>
    <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
    <Button onClick={() => openNotificationWithIcon("warning")}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
  </Space>
);

export default App;
