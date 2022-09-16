import { Space, Switch } from "antd";
import type { FC } from "react";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: FC = () => (
  <Space direction="vertical">
    <Space size={16}>
      <Switch
        className="ant-switch-large"
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
      <Switch
        defaultChecked
        className="ant-switch-large"
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
      <Switch
        disabled
        className="ant-switch-large"
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
      <Switch
        disabled
        defaultChecked
        className="ant-switch-large"
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
    </Space>
    <Space size={16}>
      <Switch checkedChildren="开" unCheckedChildren="关" onChange={onChange} />
      <Switch
        defaultChecked
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
      <Switch
        disabled
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
      <Switch
        disabled
        defaultChecked
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={onChange}
      />
    </Space>
  </Space>
);

export default App;
