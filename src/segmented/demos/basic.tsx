import { Segmented, Space } from "antd";

const options = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"].map(
  (_, idx) => ({ label: `选项${idx + 1}`, value: _ })
);

export default () => (
  <Space direction="vertical" size={16}>
    <Space>
      正常使用
      <Segmented options={options} />
    </Space>
    <Space>
      不可点击
      <Segmented
        options={options.map((option, idx) => ({
          ...option,
          disabled: idx !== options.length - 1,
        }))}
      />
    </Space>
  </Space>
);
