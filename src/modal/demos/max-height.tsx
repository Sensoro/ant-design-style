import { Button, Space, Modal, ConfigProvider } from "antd";
import React, { useState } from "react";
import zhCN from "antd/es/locale/zh_CN";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

const data = Array(100).fill(0);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mock, setMock] = useState([]);

  return (
    <ConfigProvider locale={zhCN}>
      <Space size={16}>
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
            setTimeout(() => {
              setMock(data);
            }, 1000);
          }}
        >
          最大高度适配
        </Button>
      </Space>
      <Modal
        width={480}
        title="标题文字"
        open={isModalOpen}
        closeIcon={<CloseOutlined />}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <div style={{ height: 1000, background: "red", width: 1000 }}></div>
        <div style={{ background: "#ffcbc7" }}>
          {mock.map((_, idx) => (
            <div key={idx}>
              <p>内容区域</p>
              <p>padding: 24px</p>
            </div>
          ))}
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default App;
