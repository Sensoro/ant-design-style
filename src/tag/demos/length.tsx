import { Tag, Space, Tooltip } from "antd";

export default () => {
  const tips = "这是一行较长的标签名称";

  return (
    <Space direction="vertical">
      <Tooltip title={tips}>
        <Tag style={{ maxWidth: 140 }}>这是一行较长的标签名称</Tag>
      </Tooltip>

      <Tooltip title={tips}>
        <Tag className="ant-tag-sm" style={{ maxWidth: 136 }}>
          这是一行较长的标签名称
        </Tag>
      </Tooltip>
    </Space>
  );
};
