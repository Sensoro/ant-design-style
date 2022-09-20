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
        <Checkbox.Group style={{ width: "100%" }}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="E">E</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
    </Space>
  );
};
