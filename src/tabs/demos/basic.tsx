import { Tabs } from "antd";
import type { FC } from "react";

const App: FC = () => {
  const items = [
    { label: "图表数据", key: "item-1", children: "内容 1" }, // 务必填写 key
    { label: "数据日志", key: "item-2", children: "内容 2" },
    { label: "生命周期", key: "item-3", children: "内容 3" },
    { label: "不可点击", key: "item-4", disabled: true, children: "内容 4" },
  ];

  return <Tabs defaultActiveKey="item-1" items={items} />;
};

export default App;
