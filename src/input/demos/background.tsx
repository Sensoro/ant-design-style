import { Input, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={32}>
      <Space
        direction="vertical"
        size={16}
        style={{
          background: "#f6f7f8",
          width: 500,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input allowClear placeholder="请输入" style={{ width: 240 }} />

        <Input
          allowClear
          placeholder="请输入"
          defaultValue="李四"
          style={{ width: 240 }}
        />

        <Input disabled defaultValue="李四" style={{ width: 240 }} />
      </Space>
      <Space
        direction="vertical"
        size={16}
        style={{
          background: "#dbdee2",
          width: 500,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input allowClear placeholder="请输入" style={{ width: 240 }} />

        <Input
          allowClear
          placeholder="请输入"
          defaultValue="李四"
          style={{ width: 240 }}
        />

        <Input disabled defaultValue="李四" style={{ width: 240 }} />
      </Space>
    </Space>
  );
};
