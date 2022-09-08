import { InputNumber } from "antd";

export default () => {
  return (
    <div className="demo-block">
      <InputNumber addonAfter="￥" defaultValue={100} />
    </div>
  );
};
