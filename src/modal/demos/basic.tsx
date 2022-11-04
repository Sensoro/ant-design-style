import { Button, Space, Modal, ConfigProvider } from "antd";
import React, { useState } from "react";
import zhCN from "antd/es/locale/zh_CN";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  return (
    <ConfigProvider locale={zhCN}>
      <Space size={16}>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          小弹窗
        </Button>
        <Button type="primary" onClick={() => setIsModalOpen2(true)}>
          默认弹窗
        </Button>
        <Button type="primary" onClick={() => setIsModalOpen3(true)}>
          大弹窗
        </Button>
      </Space>
      <Modal
        width={480}
        centered
        title="标题文字"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <div style={{ background: "#ffcbc7" }}>
          <p>内容区域</p>
          <p>padding: 24px</p>
        </div>
      </Modal>
      <Modal
        title="标题文字"
        centered
        width={720}
        open={isModalOpen2}
        onOk={() => setIsModalOpen2(false)}
        onCancel={() => setIsModalOpen2(false)}
      >
        <div style={{ background: "#ffcbc7" }}>
          <p>内容区域</p>
          <p>padding: 24px</p>
        </div>
      </Modal>
      <Modal
        title="标题文字"
        centered
        width={960}
        open={isModalOpen3}
        onOk={() => setIsModalOpen3(false)}
        onCancel={() => setIsModalOpen3(false)}
      >
        <div style={{ background: "#ffcbc7" }}>
          <p>内容区域</p>
          <p>padding: 24px</p>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default App;
