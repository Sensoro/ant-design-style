import { Select, Space } from "antd";
const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

export default () => {
  return (
    <Space>
      <Select
        allowClear
        showSearch
        placeholder="请选择"
        optionFilterProp="children"
        style={{ width: 240 }}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          // @ts-ignore
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        notFoundContent={
          <div className="ant-select-empty-content">暂无内容</div>
        }
      >
        <Option value="pxl">亮哥</Option>
        <Option value="wsj">婧姐</Option>
        <Option value="zfh">小张</Option>
        <Option value="nh">海哥</Option>
        <Option value="lwl">龙哥</Option>
      </Select>

      <Select
        showSearch
        placeholder="请选择"
        style={{ width: 240 }}
        notFoundContent={
          <div className="ant-select-empty-content">暂无内容</div>
        }
      />
    </Space>
  );
};
