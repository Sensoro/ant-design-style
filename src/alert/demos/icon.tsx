import { Alert, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon closable />
      <Alert message="Warning" type="warning" showIcon closable />
      <Alert message="Error" type="error" showIcon />
    </Space>
  );
};
