import { Tooltip } from "antd";
import "./_docs.less";

import InfoCircleOutlined from "@sensoro-design/icons/InfoCircleOutlined";

export default () => {
  return (
    <>
      <Tooltip title="这是一个工具提示">
        <span>工具</span>
      </Tooltip>

      <Tooltip title="感受下，这是一个最长的提示，宽度是240px">
        <span>最长的提示</span>
      </Tooltip>

      <Tooltip title="图标类型的提示">
        <InfoCircleOutlined />
      </Tooltip>
    </>
  );
};
