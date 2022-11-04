import { Button, Modal, Space } from "antd";

export type NotificationType = "success" | "info" | "warning" | "error";

const confirm = (type: NotificationType) => {
  Modal[type]({
    width: 480,
    centered: true,
    title: "确认将房间（房间001）从系统中移除？",
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
