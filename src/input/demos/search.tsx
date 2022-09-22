import { Input, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input.Search placeholder="请输入关键词" style={{ width: 240 }} />

      <Input.Search
        allowClear
        style={{ width: 240 }}
        placeholder="请输入关键词"
        defaultValue="海海海"
      />

      <Input.Search
        disabled
        placeholder="请输入关键词"
        style={{ width: 240 }}
      />
    </Space>
  );
};
