import { Checkbox, Divider, Row, Col } from "antd";

import "../../checkbox/index.less";
import "../../col/index.less";

const App = () => (
  <Row gutter={32}>
    <Col span={12}>
      <Checkbox>实线</Checkbox>
      <Divider />
      <Checkbox indeterminate>实线</Checkbox>
    </Col>
    <Col span={12}>
      <Checkbox>虚线</Checkbox>
      <Divider dashed />
      <Checkbox indeterminate>虚线</Checkbox>
    </Col>
  </Row>
);

export default App;
