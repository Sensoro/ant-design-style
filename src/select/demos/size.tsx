import { Select, Space } from "antd";
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

const App = () => (
  <Space wrap>
    <Select
      style={{ width: 240 }}
      showArrow
      mode="multiple"
      size="large"
      placeholder="请选择"
      onChange={handleChange}
    >
      {children}
    </Select>
    <Select
      style={{ width: 240 }}
      showArrow
      mode="multiple"
      placeholder="请选择"
      onChange={handleChange}
    >
      {children}
    </Select>
    <Select
      style={{ width: 240 }}
      showArrow
      mode="multiple"
      size="small"
      placeholder="请选择"
      onChange={handleChange}
    >
      {children}
    </Select>
  </Space>
);

export default App;
