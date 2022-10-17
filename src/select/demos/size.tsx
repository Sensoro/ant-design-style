import { Select, Space } from "antd";
import CloseOutlined from "@sensoro-design/icons/CloseOutlined";
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
  <Space>
    <Space direction="vertical">
      <Space>
        大
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
      </Space>
      <Space>
        中
        <Select
          style={{ width: 240 }}
          showArrow
          mode="multiple"
          placeholder="请选择"
          onChange={handleChange}
        >
          {children}
        </Select>
      </Space>
      <Space>
        小
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
    </Space>
    <Space direction="vertical">
      <Space>
        <Select
          clearIcon={<CloseOutlined />}
          allowClear
          style={{ width: 240 }}
          showArrow
          size="large"
          placeholder="请选择"
          onChange={handleChange}
        >
          {children}
        </Select>
      </Space>
      <Space>
        <Select
          clearIcon={<CloseOutlined />}
          allowClear
          style={{ width: 240 }}
          showArrow
          placeholder="请选择"
          onChange={handleChange}
        >
          {children}
        </Select>
      </Space>
      <Space>
        <Select
          clearIcon={<CloseOutlined />}
          allowClear
          style={{ width: 240 }}
          showArrow
          size="small"
          placeholder="请选择"
          onChange={handleChange}
        >
          {children}
        </Select>
      </Space>
    </Space>
  </Space>
);

export default App;
