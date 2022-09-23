import { Steps } from "antd";
import type { FC } from "react";
import { useState } from "react";

const { Step } = Steps;

const App: FC = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (value: number) => {
    console.log("onChange:", current);
    setCurrent(value);
  };

  return (
    <Steps current={current} onChange={onChange}>
      <Step title="项目信息" />
      <Step title="功能授权" />
      <Step title="应用项目" />
    </Steps>
  );
};

export default App;
