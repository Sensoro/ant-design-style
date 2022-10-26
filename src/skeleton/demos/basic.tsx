import { Skeleton, Space } from "antd";
import React from "react";

const App: React.FC = () => {
  const styles = {
    width: 500,
    padding: "24px 24px 32px",
    border: "1px solid rgba(0,0,0,0.09)",
  };

  return (
    <Space direction="vertical">
      <div style={styles}>
        <Skeleton />
      </div>
      <div style={{ ...styles, height: 200 }}>
        <Skeleton />
      </div>
    </Space>
  );
};

export default App;
