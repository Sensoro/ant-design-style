import { Slider, Switch, Space } from "antd";
import { useState } from "react";
import type { FC } from "react";
import type { SliderMarks } from "antd/es/slider";

const marks: SliderMarks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: "100°C",
};

const App: FC = () => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical" size={16}>
      <div>
        disabled: <Switch checked={disabled} onChange={onChange} />
      </div>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider defaultValue={40} disabled={disabled} tooltip={{ open: true }} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      <Slider marks={marks} defaultValue={37} disabled={disabled} />
    </Space>
  );
};

export default App;
