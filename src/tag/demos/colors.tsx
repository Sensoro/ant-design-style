import { Space, Tag } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Space>
        <label>深色</label>
        <Tag color="#f72231">标签名称</Tag>
        <Tag color="#f98206">标签名称</Tag>
        <Tag color="#f9aa06">标签名称</Tag>
        <Tag color="#1acb7c">标签名称</Tag>
        <Tag color="#2b6de5">标签名称</Tag>
      </Space>

      <Space wrap>
        <label>浅色</label>
        <Tag color="red">标签名称</Tag>
        <Tag color="orange">标签名称</Tag>
        <Tag color="gold">标签名称</Tag>
        <Tag color="green">标签名称</Tag>
        <Tag color="blue">标签名称</Tag>
      </Space>
    </Space>
  );
};
