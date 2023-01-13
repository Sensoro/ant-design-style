import { Space, InputNumber, Select } from "antd";

const { Option } = Select;

import "./after.less";

const prefixCls = "input-number-multiple";

export default () => {
  const largeSelectAfter = (
    <Select
      popupClassName={`${prefixCls}-select-popup`}
      className={`${prefixCls}-select`}
      size="large"
      style={{ width: 68 }}
      defaultValue="second"
    >
      <Option value="second">秒</Option>
      <Option value="minute">分</Option>
      <Option value="hour">时</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      popupClassName={`${prefixCls}-select-popup`}
      className={`${prefixCls}-select`}
      style={{ width: 58 }}
      defaultValue="second"
    >
      <Option value="second">秒</Option>
      <Option value="minute">分</Option>
      <Option value="hour">时</Option>
    </Select>
  );
  const smallSelectAfter = (props = {}) => (
    <Select
      popupClassName={`${prefixCls}-select-popup`}
      className={`${prefixCls}-select`}
      size="small"
      style={{ width: 44 }}
      defaultValue="second"
      {...props}
    >
      <Option value="second">秒</Option>
      <Option value="minute">分</Option>
      <Option value="hour">时</Option>
    </Select>
  );

  return (
    <Space direction="vertical">
      <InputNumber
        placeholder="请输入"
        defaultValue={1}
        className={`${prefixCls}-input`}
        controls={false}
        size="large"
        style={{ width: 160 }}
        addonAfter={largeSelectAfter}
      />
      <InputNumber
        placeholder="请输入"
        defaultValue={1}
        className={`${prefixCls}-input`}
        controls={false}
        style={{ width: 160 }}
        addonAfter={selectAfter}
      />
      <InputNumber
        placeholder="请输入"
        defaultValue={1}
        className={`${prefixCls}-input`}
        controls={false}
        size="small"
        style={{ width: 160 }}
        addonAfter={smallSelectAfter()}
      />
      <InputNumber
        placeholder="切换禁用"
        className={`${prefixCls}-input`}
        controls={false}
        size="small"
        style={{ width: 160 }}
        addonAfter={smallSelectAfter({ disabled: true })}
      />
    </Space>
  );
};
