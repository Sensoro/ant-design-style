import { Radio, Select, Space } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const children: any[] = [];

for (let i = 0; i < 26; i++) {
  children.push(
    <Option key={i}>
      选项{i + 1}
      {i === 0 && "测试长度的选项，超出多少省略呢"}
    </Option>
  );
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App = () => {
  const [type, setType] = useState<undefined | number | "responsive">();
  return (
    <Space direction="vertical" size={32}>
      <Radio.Group value={type} onChange={(e) => setType(e.target.value)}>
        <Radio value={undefined}>默认</Radio>
        <Radio value={3}>超过3个隐藏</Radio>
        <Radio value="responsive">自适应</Radio>
      </Radio.Group>

      <Select
        style={{ width: 240 }}
        defaultOpen
        showArrow
        maxTagCount={type}
        mode="multiple"
        placeholder="请选择"
        defaultValue={["1", "2"]}
        onChange={handleChange}
      >
        {children}
      </Select>
    </Space>
  );
};

export default App;
