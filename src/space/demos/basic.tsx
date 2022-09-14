import { Tag, Space } from "antd";

import "../../tag/index.less";

const App = () => (
  <>
    <div>
      <span style={{ marginRight: 16 }}>水平方向</span>
      <Space wrap size={0}>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <Tag key={idx}>标签名称</Tag>
          ))}
      </Space>
    </div>
    <div style={{ marginTop: 16 }}>
      <span style={{ marginRight: 16 }}>垂直方向</span>
      <Space direction="vertical" size={8}>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <Tag key={idx}>标签名称</Tag>
          ))}
      </Space>
    </div>
    <div style={{ marginTop: 16 }}>
      <span style={{ marginRight: 16 }}>环绕间距</span>
      <Space style={{ width: 450 }} wrap size={8}>
        {Array(13)
          .fill(0)
          .map((_, idx) => (
            <Tag key={idx}>标签名称</Tag>
          ))}
      </Space>
    </div>
  </>
);

export default App;
