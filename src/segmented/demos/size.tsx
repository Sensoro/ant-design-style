import { Segmented, Space } from "antd";

const options = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"].map(
  (_, idx) => ({ label: `选项${idx + 1}`, value: _ })
);

export default () => (
  <Space direction="vertical" size={16}>
    <Space>
      小尺寸
      <Segmented size="small" options={options} />
    </Space>
    <Space>
      中尺寸
      <Segmented options={options} />
    </Space>
    <Space>
      大尺寸
      <Segmented size="large" options={options} />
    </Space>
  </Space>
);
