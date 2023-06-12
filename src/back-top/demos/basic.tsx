import { BackTop, Tooltip } from "antd";
import React from "react";
import ToTopOutlined from "@sensoro-design/icons/ToTopOutlined";

const App: React.FC = () => (
  <div id="back-top" style={{ height: "600px", overflowY: "auto" }}>
    <div style={{ padding: 8 }}>
      {new Array(200).fill(0).map((zero, index) => (
        <div key={index}>Scroll to bottom</div>
      ))}
    </div>
    <BackTop target={() => document.getElementById("back-top") || window}>
      <Tooltip title="回到顶部" placement="left">
        <div className="ant-back-top-content">
          <div className="ant-back-top-icon">
            <ToTopOutlined />
          </div>
        </div>
      </Tooltip>
    </BackTop>
  </div>
);

export default App;
