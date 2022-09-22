import { Input, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input placeholder="请输入" size="large" style={{ width: 320 }} />

      <Input placeholder="请输入" style={{ width: 240 }} />

      <Input placeholder="请输入" size="small" style={{ width: 160 }} />
    </Space>
  );
};
