import { Input, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input placeholder="请输入" style={{ width: 240 }} />

      <Input defaultValue="李四" style={{ width: 240 }} />

      <Input disabled defaultValue="李四" style={{ width: 240 }} />
    </Space>
  );
};
