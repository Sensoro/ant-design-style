import { Select, Space } from "antd";
const { Option } = Select;
import "./_doc.less";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <Space>
    <Select
      style={{ width: 128 }}
      onChange={handleChange}
      placeholder="请选择"
      defaultValue="nh"
    >
      <Option value="pxl">亮哥</Option>
      <Option value="wsj">婧姐</Option>
      <Option value="zfh">小张</Option>
      <Option value="nh" disabled>
        海哥
      </Option>
      <Option value="lwl" disabled>
        龙哥
      </Option>
    </Select>
    <Select
      style={{ width: 128 }}
      onChange={handleChange}
      placeholder="请选择"
      defaultValue="wsj"
    >
      <Option value="pxl">亮哥</Option>
      <Option value="wsj">婧姐</Option>
      <Option value="zfh">小张</Option>
      <Option value="nh" disabled>
        海哥
      </Option>
    </Select>
    <Select style={{ width: 128 }} disabled defaultValue="zfh">
      <Option value="pxl">亮哥</Option>
      <Option value="wsj">婧姐</Option>
      <Option value="zfh">小张</Option>
    </Select>
    <Select
      style={{ width: 128 }}
      onChange={handleChange}
      placeholder="请选择"
      defaultValue="nh"
    >
      <Option value="pxl">亮哥</Option>
      <Option value="wsj">婧姐</Option>
      <Option value="zfh">小张</Option>
      <Option value="nh">这个人的名字有点长可能需要省略号</Option>
    </Select>
    <Select
      style={{ width: 128 }}
      defaultOpen
      onChange={handleChange}
      placeholder="请选择"
      defaultValue="nh"
    >
      <Option value="pxl">亮哥</Option>
      <Option value="wsj">婧姐</Option>
      <Option value="zfh">小张</Option>
      <Option value="nh">走查专用</Option>
    </Select>
  </Space>
);

export default App;
