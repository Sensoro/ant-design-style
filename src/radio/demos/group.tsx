import { Radio, Space, Input } from "antd";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Space direction="vertical" size={32}>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>海哥</Radio>
        <Radio value={2}>龙哥</Radio>
        <Radio value={3}>亮哥</Radio>
        <Radio value={4}>小张</Radio>
      </Radio.Group>

      <Radio.Group>
        <Space direction="vertical" size={16}>
          <Radio value={1}>海哥</Radio>
          <Radio value={2}>龙哥</Radio>
          <Radio value={3}>亮哥</Radio>
          <Radio value={4}>小张</Radio>
        </Space>
      </Radio.Group>
    </Space>
  );
};

export default App;
