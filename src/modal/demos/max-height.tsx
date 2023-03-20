import { Button, Space, Modal, ConfigProvider } from "antd";
import React, { useState } from "react";
import zhCN from "antd/es/locale/zh_CN";

const data = Array(100).fill(0);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [mock, setMock] = useState<any>([]);

  return (
    <ConfigProvider locale={zhCN}>
      <Space size={16}>
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
            setMock(data);
          }}
        >
          最大高度适配
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          最小高度适配(含footer)
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setOpen2(true);
          }}
        >
          最小高度适配(不含footer)
        </Button>
      </Space>
      <Modal
        width={480}
        title="标题文字"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <div style={{ background: "#ffcbc7" }}>
          {mock.map((_, idx) => (
            <div key={idx}>
              <p>内容区域</p>
              <p>padding: 24px</p>
            </div>
          ))}
        </div>
      </Modal>
      <Modal
        width={480}
        title="标题文字"
        open={open1}
        onOk={() => setOpen1(false)}
        onCancel={() => setOpen1(false)}
      >
        带 footer
      </Modal>
      <Modal
        width={480}
        title="标题文字"
        footer={false}
        open={open2}
        bodyStyle={{ minHeight: 164 }}
        onOk={() => setOpen2(false)}
        onCancel={() => setOpen2(false)}
      >
        不带 footer
      </Modal>
    </ConfigProvider>
  );
};

export default App;
