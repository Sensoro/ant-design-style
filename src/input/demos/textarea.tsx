import { Input, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input.TextArea
        showCount
        style={{ width: 240 }}
        maxLength={20}
        placeholder="请输入"
      />
      <Input.TextArea
        style={{ width: 240 }}
        showCount
        maxLength={20}
        placeholder="请输入"
        defaultValue="清蒸桂鱼、麻辣小龙虾清蒸桂鱼、123桂鱼"
      />
      <Input.TextArea
        showCount
        style={{ width: 240 }}
        maxLength={100}
        placeholder="请输入"
      />
    </Space>
  );
};
