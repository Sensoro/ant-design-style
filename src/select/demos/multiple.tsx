import { Select } from "antd";
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
  <div className="demo-block">
    <Select
      showArrow
      mode="multiple"
      placeholder="请选择"
      onChange={handleChange}
    >
      {children}
    </Select>
    <br />
    <Select
      showArrow
      mode="multiple"
      placeholder="请选择"
      defaultValue={["1", "2"]}
      onChange={handleChange}
    >
      {children}
    </Select>
    <br />
    <Select
      showArrow
      mode="multiple"
      disabled
      placeholder="请选择"
      defaultValue={["1", "2"]}
      onChange={handleChange}
    >
      {children}
    </Select>
  </div>
);

export default App;
