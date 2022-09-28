import { Select, Space } from "antd";
import React from "react";
const { Option, OptGroup } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <Space>
    <Select onChange={handleChange} placeholder="请选择" style={{ width: 240 }}>
      <OptGroup label="热门城市">
        <Option value="beijing">北京</Option>
        <Option value="guangzhou">广州</Option>
      </OptGroup>
      <OptGroup label="城市">
        <Option value="tianjing">天津</Option>
        <Option value="xiamen">厦门</Option>
      </OptGroup>
    </Select>

    <Select
      defaultOpen
      onChange={handleChange}
      placeholder="走查专用"
      style={{ width: 240 }}
    >
      <OptGroup label="热门城市">
        <Option value="beijing">北京</Option>
        <Option value="guangzhou">广州</Option>
      </OptGroup>
      <OptGroup label="城市">
        <Option value="tianjing">天津</Option>
        <Option value="xiamen">厦门</Option>
      </OptGroup>
    </Select>
  </Space>
);

export default App;
