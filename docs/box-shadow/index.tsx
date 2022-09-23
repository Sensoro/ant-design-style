import "./index.less";

import { Row, Col } from "antd";

export default () => (
  <Row className="box" gutter={[16, 24]}>
    <Col span={8}>
      <div className="shadow">
        <span>BG-white</span>
        <br />
        背景/警告/表单输入
      </div>
    </Col>
    <Col span={8}>
      <div className="shadow shadow-1">
        <span>@sensoro-shadow-1</span>
        <br />
        卡片背景1
      </div>
    </Col>
    <Col span={8}>
      <div className="shadow shadow-2">
        <span>@sensoro-shadow-2</span>
        <br />
        卡片背景2
      </div>
    </Col>
    <Col span={8}>
      <div className="shadow shadow-3">
        <span>@sensoro-shadow-3</span>
        <br />
        时间选择器/级联选择/表单选择
      </div>
    </Col>
    <Col span={8}>
      <div className="shadow shadow-4">
        <span>@sensoro-shadow-4</span>
        <br />
        卡片hover
      </div>
    </Col>
    <Col span={8}>
      <div className="shadow shadow-5">
        <span>@sensoro-shadow-5</span>
        <br />
        弹窗
      </div>
    </Col>
  </Row>
);
