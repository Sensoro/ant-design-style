import { Input, Space } from "antd";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input
        // allowClear={{
        //   clearIcon: <CloseOutlined />,
        // }}
        placeholder="请输入"
        style={{ width: 240 }}
      />

      <Input
        allowClear={{
          clearIcon: <CloseOutlined />,
        }}
        placeholder="请输入"
        defaultValue="李四"
        style={{ width: 240 }}
      />

      <Input disabled defaultValue="李四" style={{ width: 240 }} />
    </Space>
  );
};
