import { Space, InputNumber } from "antd";

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        大
        <InputNumber size="large" style={{ width: 160 }} defaultValue={100} />
      </Space>
      <Space>
        中
        <InputNumber style={{ width: 160 }} defaultValue={100} />
      </Space>
      <Space>
        小
        <InputNumber size="small" style={{ width: 160 }} defaultValue={0} />
      </Space>
    </Space>
  );
};
