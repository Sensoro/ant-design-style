import { Button, Drawer } from "antd";
import React, { useState } from "react";

import "./demo.less";

const App: React.FC = () => {
  const [open3, setOpen3] = useState(false);

  return (
    <div style={{ background: "#f6f7f8", height: 600 }}>
      <Button type="primary" onClick={() => setOpen3(true)}>
        非模态抽屉
      </Button>
      <Drawer
        width={640}
        title="非模态抽屉 640px"
        className="without-mask"
        placement="right"
        getContainer={false}
        onClose={() => setOpen3(false)}
        style={{ position: "absolute" }}
        open={open3}
      >
        <div style={{ background: "#ffcbc7", height: "100vh" }}>
          <p>内容区域</p>
          <p>padding: 0 24px 32px</p>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
