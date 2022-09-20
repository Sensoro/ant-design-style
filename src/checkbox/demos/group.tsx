import { Checkbox, Space, Col, Row } from "antd";
import type { CheckboxProps } from "antd/es/checkbox";

const plainOptions = ["Apple", "Pear", "Orange"];

import "../../space/index.less";

export default () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Space direction="vertical" size={32}>
      <div>
        水平：
        <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} />
      </div>

      <div>
        垂直：
        <Space direction="vertical" size={16}>
          <Checkbox value="Apple">Apple</Checkbox>
          <Checkbox value="Pear">Pear</Checkbox>
          <Checkbox value="Orange">Orange</Checkbox>
        </Space>
      </div>
    </Space>
  );
};
