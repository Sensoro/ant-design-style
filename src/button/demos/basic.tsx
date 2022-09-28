import { Button, Space } from "antd";

import "../../space/index.less";

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary">主要按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚框按钮</Button>
        <Button type="link">链接按钮</Button>
      </Space>
      <Space>
        <Button type="primary" disabled>
          主要按钮
        </Button>
        <Button disabled>默认按钮</Button>
        <Button type="dashed" disabled>
          虚框按钮
        </Button>
        <Button type="link" disabled>
          链接按钮
        </Button>
      </Space>
    </Space>
  );
};
