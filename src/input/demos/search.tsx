import { Input, Space } from "antd";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input.Search
        allowClear={{
          clearIcon: <CloseOutlined />,
        }}
        placeholder="请输入关键词"
        style={{ width: 240 }}
      />

      <Input.Search
        allowClear={{
          clearIcon: <CloseOutlined />,
        }}
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
