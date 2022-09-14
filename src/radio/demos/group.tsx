import { Radio } from "antd";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>海哥</Radio>
        <Radio value={2}>龙哥</Radio>
        <Radio value={3}>亮哥</Radio>
        <Radio value={4}>小张</Radio>
      </Radio.Group>

      {/*<Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? (
              <Input style={{ width: 100, marginLeft: 10 }} />
            ) : null}
          </Radio>
        </Space>
      </Radio.Group>*/}
    </>
  );
};

export default App;
