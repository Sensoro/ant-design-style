import { Button, message, Space } from "antd";
import React from "react";

const info = () => {
  message.info("这是一条成功消息，会主动消失");
};

const success = () => {
  message.success("这是一条成功消息，会主动消失");
};

const error = () => {
  message.error("这是一条成功消息，会主动消失");
};

const warning = () => {
  message.warning("这是一条成功消息，会主动消失");
};

const App: React.FC = () => (
  <Space>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
);

export default App;
