import { Input, Space, Select } from "antd";

const { Option } = Select;

export default () => {
  return (
    <Space direction="vertical" size={16}>
      <Input.Group compact>
        <Select defaultValue="Zhejiang" style={{ width: 120 }}>
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input style={{ width: 240 }} defaultValue="Xihu District, Hangzhou" />
      </Input.Group>

      <Input.Group compact>
        <Select defaultValue="Zhejiang" disabled style={{ width: 120 }}>
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input style={{ width: 240 }} defaultValue="Xihu District, Hangzhou" />
      </Input.Group>
    </Space>
  );
};
