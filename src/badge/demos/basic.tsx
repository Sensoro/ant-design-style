import { Badge, Tabs, Space } from "antd";

const items = [
  { label: "摄像机列表", key: "item-1" },
  { label: "待部署通道", key: "item-2" },
];

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        数值较小
        <Badge count={8}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
      <Space>
        数值较大
        <Badge count={99}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
      <Space>
        数字封顶
        <Badge count={10000}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
      <Space>
        自定义封顶数值
        <Badge overflowCount={500} count={10000}>
          <Tabs defaultActiveKey="item-1" type="card" items={items} />
        </Badge>
      </Space>
    </Space>
  );
};
