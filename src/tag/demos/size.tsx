import { Tag } from "antd";

export default () => {
  return (
    <>
      <Tag className="ant-tag-sm">标签名称</Tag>

      <Tag className="ant-tag-sm" closable>
        标签名称
      </Tag>
    </>
  );
};
