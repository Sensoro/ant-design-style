import { Space, Switch } from "antd";
import type { FC } from "react";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: FC = () => (
  <Space direction="vertical" size={16}>
    <Space size={16}>
      <Switch onChange={onChange} />
      <Switch size="small" onChange={onChange} />
    </Space>

    <Space size={16}>
      <Switch defaultChecked onChange={onChange} />
      <Switch size="small" defaultChecked onChange={onChange} />
    </Space>
  </Space>
);

export default App;
