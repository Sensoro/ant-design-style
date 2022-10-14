import { Segmented, Divider, Space } from "antd";

const options = [
  {
    label: "选项名称",
    value: 1,
  },
  {
    label: "选项名称",
    value: 2,
  },
  {
    label: "长文本选项测试出现省略号",
    value: 3,
  },
];

export default () => (
  <Space direction="vertical" size={16} style={{ width: "100%" }}>
    <div style={{ width: 304 }}>
      <Divider plain>父级宽度304px</Divider>
      <Segmented block options={options} />
    </div>

    <div style={{ width: "100%" }}>
      <Divider plain>父级宽度100%</Divider>
      <Segmented block options={options} />
    </div>
  </Space>
);
