import { Input, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input.Password style={{ width: 240 }} placeholder="请输入" />
      <Input.Password
        style={{ width: 240 }}
        defaultValue={123456}
        placeholder="请输入"
      />
    </Space>
  );
};
