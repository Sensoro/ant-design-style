import { Space, InputNumber } from "antd";

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        正常
        <InputNumber style={{ width: 160 }} defaultValue={100} />
      </Space>
      <Space>
        最大
        <InputNumber style={{ width: 160 }} defaultValue={100} max={100} />
      </Space>
      <Space>
        最小
        <InputNumber style={{ width: 160 }} defaultValue={0} min={0} />
      </Space>
      <Space>
        后缀
        <InputNumber
          style={{ width: 160 }}
          addonAfter="￥"
          defaultValue={100}
        />
      </Space>
      <Space>
        禁用
        <InputNumber
          disabled
          defaultValue={100}
          style={{ width: 160 }}
          addonAfter="￥"
        />
      </Space>
    </Space>
  );
};
