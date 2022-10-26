import { Input, Space } from "antd";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input
        allowClear={{
          clearIcon: <CloseOutlined />,
        }}
        placeholder="请输入"
        size="large"
        style={{ width: 320 }}
      />

      <Input
        allowClear={{
          clearIcon: <CloseOutlined />,
        }}
        placeholder="请输入"
        style={{ width: 240 }}
      />

      <Input
        allowClear={{
          clearIcon: <CloseOutlined />,
        }}
        placeholder="请输入"
        size="small"
        style={{ width: 160 }}
      />
    </Space>
  );
};
