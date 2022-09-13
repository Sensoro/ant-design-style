import { Select } from "antd";
import React from "react";
const { Option, OptGroup } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <Select onChange={handleChange} placeholder="请选择">
    <OptGroup label="热门城市">
      <Option value="beijing">北京</Option>
      <Option value="guangzhou">广州</Option>
    </OptGroup>
    <OptGroup label="城市">
      <Option value="tianjing">天津</Option>
      <Option value="xiamen">厦门</Option>
    </OptGroup>
  </Select>
);

export default App;
