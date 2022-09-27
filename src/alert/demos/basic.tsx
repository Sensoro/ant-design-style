import { Alert, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <Alert type="success" message="这是一条成功的消息提示" />
      <Alert type="info" message="这是一条普通的消息提示" />
      <Alert type="warning" message="这是一条警示信息" />
      <Alert type="error" message="高危操作/出错信息提示" />
    </Space>
  );
};
