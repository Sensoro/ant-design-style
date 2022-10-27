import { Badge, Tabs, Space } from "antd";

const items = [
  { label: "摄像机列表", key: "item-1" },
  { label: "待部署通道", key: "item-2" },
];

export default () => {
  const styles = {
    lineHeight: "40px",
    marginBottom: 16,
    width: 100,
  };

  return (
    <Space direction="vertical">
      <Space>
        <div style={styles}>数值较小</div>
        <Badge count={8}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
      <Space>
        <div style={styles}>数值较大</div>
        <Badge count={99}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
      <Space>
        <div style={styles}>数字封顶</div>
        <Badge count={10000}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
      <Space>
        <div style={styles}>自定义封顶数值</div>
        <Badge overflowCount={500} count={10000}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
    </Space>
  );
};
