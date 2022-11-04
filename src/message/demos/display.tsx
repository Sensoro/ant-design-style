import { Button, message, Space } from "antd";
import React from "react";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

const contentStyle = {
  height: 20,
  display: "flex",
  alignItems: "center",
};

const App: React.FC = () => {
  const onClose = (key: string) => {
    message.destroy(key);
  };

  const success = () => {
    message.success({
      key: "custom-1",
      content: (
        <div style={contentStyle}>
          这是一条提示消息，不会主动消失
          <CloseOutlined
            className="ant-message-close"
            onClick={() => onClose("custom-1")}
          />
        </div>
      ),
      duration: 0,
    });
  };

  const link = () => {
    message.success({
      key: "custom-2",
      content: (
        <div style={contentStyle}>
          这是一条提示消息，不会主动消失
          <Button type="link" style={{ padding: "4px 0 4px 11px" }}>
            文字链接
          </Button>
          <CloseOutlined
            className="ant-message-close"
            onClick={() => onClose("custom-2")}
          />
        </div>
      ),
      duration: 0,
    });
  };

  return (
    <Space>
      <Button onClick={success}>Success</Button>
      <Button onClick={link}>文字链接</Button>
    </Space>
  );
};

export default App;
