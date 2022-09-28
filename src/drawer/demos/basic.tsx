import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <Space size={16}>
        <Button type="primary" onClick={() => setOpen(true)}>
          400px
        </Button>
        <Button type="primary" onClick={() => setOpen2(true)}>
          480px
        </Button>
        <Button type="primary" onClick={() => setOpen3(true)}>
          640px
        </Button>
      </Space>
      <Drawer
        width={400}
        title="小抽屉 400px"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div style={{ background: "#ffcbc7", height: "100vh" }}>
          <p>内容区域</p>
          <p>padding: 0 24px 32px</p>
        </div>
      </Drawer>
      <Drawer
        width={480}
        title="中等抽屉 480px"
        placement="right"
        onClose={() => setOpen2(false)}
        open={open2}
      >
        <div style={{ background: "#ffcbc7", height: "100vh" }}>
          <p>内容区域</p>
          <p>padding: 0 24px 32px</p>
        </div>
      </Drawer>
      <Drawer
        width={640}
        title="大抽屉 640px"
        placement="right"
        onClose={() => setOpen3(false)}
        open={open3}
      >
        <div style={{ background: "#ffcbc7", height: "100vh" }}>
          <p>内容区域</p>
          <p>padding: 0 24px 32px</p>
        </div>
      </Drawer>
    </>
  );
};

export default App;
