import { Button, Space } from "antd";
import "../../space/index.less";

export default () => {
  return (
    <Space>
      <Button danger type="primary">
        <span>删除项目</span>
      </Button>
      <Button danger>删除</Button>
      <Button type="link" danger>
        删除
      </Button>
    </Space>
  );
};
