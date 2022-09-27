import { Tooltip, Space, Button } from "antd";
import "../../button/index.less";
// import "./_docs.less";

export default () => {
  const text = "提示内容";
  const buttonWidth = 100;
  return (
    <div className="tooltip-placement-demo">
      <div style={{ marginLeft: buttonWidth + 16, whiteSpace: "nowrap" }}>
        <Space size={16}>
          <Tooltip placement="topLeft" title={text}>
            <Button style={{ width: buttonWidth }}>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button style={{ width: buttonWidth }}>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button style={{ width: buttonWidth }}>TR</Button>
          </Tooltip>
        </Space>
      </div>
      <div style={{ width: buttonWidth, float: "left" }}>
        <Space size={16} direction="vertical">
          <Tooltip placement="leftTop" title={text}>
            <Button style={{ width: buttonWidth }}>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button style={{ width: buttonWidth }}>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button style={{ width: buttonWidth }}>LB</Button>
          </Tooltip>
        </Space>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 16 * 4 }}>
        <Space size={16} direction="vertical">
          <Tooltip placement="rightTop" title={text}>
            <Button style={{ width: buttonWidth }}>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button style={{ width: buttonWidth }}>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button style={{ width: buttonWidth }}>RB</Button>
          </Tooltip>
        </Space>
      </div>
      <div
        style={{
          marginLeft: buttonWidth + 16,
          clear: "both",
          whiteSpace: "nowrap",
        }}
      >
        <Space size={16}>
          <Tooltip placement="bottomLeft" title={text}>
            <Button style={{ width: buttonWidth }}>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <Button style={{ width: buttonWidth }}>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <Button style={{ width: buttonWidth }}>BR</Button>
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};
