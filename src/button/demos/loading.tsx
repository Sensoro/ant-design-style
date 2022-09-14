import "../_docs.less";

import { Button, Space } from "antd";
import "../../space/index.less";

export default () => {
  return (
    <Space>
      <Button loading type="primary">
        主要按钮
      </Button>
      <Button loading>基础按钮</Button>
    </Space>
  );
};
