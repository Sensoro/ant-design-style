import { Divider, Space } from "antd";

import "../../space/index.less";

const App = () => (
  <Space size={32} direction="vertical">
    <Space style={{ background: "#f6f7f8" }}>
      <span>浅色</span>
      <Divider type="vertical" />
      <span>背景</span>
    </Space>
    <Space style={{ background: "#6d7789" }}>
      <span>深色</span>
      <Divider
        style={{ borderColor: "rgba(255,255,255, 0.15)" }}
        type="vertical"
      />
      <span>背景</span>
    </Space>
  </Space>
);

export default App;
