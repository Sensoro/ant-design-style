import { Divider, Space } from "antd";
import IdcardOutlined from "@sensoro-design/icons/IdcardOutlined";
import DomeCameraOutlined from "@sensoro-design/icons/DomeCameraOutlined";
import "../../space/index.less";

const App = () => (
  <Space size={32} direction="vertical">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f6f7f8",
        width: 64,
        height: 24,
        borderRadius: 2,
      }}
    >
      <DomeCameraOutlined style={{ fontSize: 16 }} />
      <Divider type="vertical" />
      <IdcardOutlined style={{ fontSize: 16 }} />
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#6d7789",
        width: 64,
        height: 24,
        borderRadius: 2,
      }}
    >
      <DomeCameraOutlined style={{ fontSize: 16, color: "#fff" }} />
      <Divider
        type="vertical"
        style={{ borderColor: "rgba(255,255,255, 0.15)" }}
      />
      <IdcardOutlined style={{ fontSize: 16, color: "#fff" }} />
    </div>
  </Space>
);

export default App;
