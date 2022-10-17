import { Space, InputNumber } from "antd";

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <Space>
          大
          <InputNumber size="large" style={{ width: 240 }} defaultValue={100} />
        </Space>
        <Space>
          中
          <InputNumber style={{ width: 240 }} defaultValue={100} />
        </Space>
        <Space>
          小
          <InputNumber size="small" style={{ width: 240 }} defaultValue={0} />
        </Space>
      </Space>

      <Space direction="vertical">
        <Space>
          <InputNumber
            size="large"
            style={{ width: 240 }}
            defaultValue={100}
            addonAfter="mA"
          />
        </Space>
        <Space>
          <InputNumber
            style={{ width: 240 }}
            defaultValue={100}
            addonAfter="mA"
          />
        </Space>
        <Space>
          <InputNumber
            size="small"
            style={{ width: 240 }}
            defaultValue={0}
            addonAfter="mA"
          />
        </Space>
      </Space>
    </Space>
  );
};
