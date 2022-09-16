import { Space, Switch } from "antd";
import type { FC } from "react";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: FC = () => (
  <Space direction="vertical" size={16}>
    <Switch onChange={onChange} />
  </Space>
);

export default App;
