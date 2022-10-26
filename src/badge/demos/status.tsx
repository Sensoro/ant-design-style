import { Badge, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical">
      <Space size={16}>
        设备状态
        <Badge status="success" text="正常" />
        <Badge color="#f98206" text="隐患" />
        <Badge status="warning" text="故障" />
        <Badge status="error" text="报警" />
        <Badge color="#a140e7" text="隔离" />
        <Badge status="default" text="失联" />
      </Space>
      <Space size={16}>
        网络状态
        <Badge color="#2b6de5" text="在线" />
        <Badge status="default" text="离线" />
      </Space>
      <Space size={16}>
        推流状态
        <Badge color="#2b6de5" text="推流中" />
        <Badge status="default" text="离线" />
      </Space>
      <Space size={16}>
        事件状态
        <Badge status="warning" text="待受理" />
        <Badge color="#2b6de5" text="处理中" />
        <Badge status="success" text="已完结" />
      </Space>
      <Space size={16}>
        操作状态
        <Badge status="error" text="失败" />
        <Badge status="success" text="成功" />
      </Space>
    </Space>
  );
};
