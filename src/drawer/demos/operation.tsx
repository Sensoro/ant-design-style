import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";

const data = Array(100).fill(0);

const App: React.FC = () => {
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Space size={16}>
        <Button type="primary" onClick={() => setOpen2(true)}>
          480px
        </Button>
      </Space>

      <Drawer
        width={480}
        title="中等抽屉 480px"
        placement="right"
        onClose={() => setOpen2(false)}
        open={open2}
        footer={
          <Space style={{ float: "right" }} size={12}>
            <Button onClick={() => setOpen2(false)}>取消</Button>
            <Button type="primary" onClick={() => setOpen2(false)}>
              确认
            </Button>
          </Space>
        }
      >
        <div style={{ background: "#ffcbc7" }}>
          {data.map((_, idx) => (
            <div key={idx}>
              <p>内容区域</p>
              <p>padding: 0 24px</p>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default App;
