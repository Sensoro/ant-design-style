import { Button, message, Space } from "antd";
import React, { useRef } from "react";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

const contentStyle = {
  height: 20,
  display: "flex",
  alignItems: "center",
};

const App: React.FC = () => {
  const instance = useRef<any>();

  const onClose = () => {
    instance?.current();
  };

  const success = () => {
    instance.current = message.success({
      content: (
        <div style={contentStyle}>
          这是一条提示消息，不会主动消失
          <CloseOutlined
            style={{
              fontSize: 16,
              margin: "0 0 0 12px",
              color: "#3c4961",
            }}
            onClick={onClose}
          />
        </div>
      ),
      duration: 0,
    });
  };

  return (
    <Space>
      <Button onClick={success}>Success</Button>
    </Space>
  );
};

export default App;
