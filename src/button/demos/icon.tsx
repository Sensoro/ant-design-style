import PlusOutlined from "@sensoro-design/icons/PlusOutlined";
import FormOutlined from "@sensoro-design/icons/FormOutlined";
import { Button, Space } from "antd";
import "../../space/index.less";

export default () => {
  return (
    <Space>
      <Button type="primary" icon={<PlusOutlined />}>
        编辑
      </Button>
      <Button icon={<PlusOutlined />}>编辑</Button>
      <Button icon={<PlusOutlined />} />
      <Button type="link" icon={<FormOutlined />} />
    </Space>
  );
};
