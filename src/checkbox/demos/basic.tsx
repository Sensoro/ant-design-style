import { Checkbox } from "antd";
import type { CheckboxProps } from "antd/es/checkbox";

export default () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <Checkbox onChange={onChange}>多选</Checkbox>

      <Checkbox indeterminate>半选</Checkbox>
    </div>
  );
};
