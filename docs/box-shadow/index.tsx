import "./index.less";

import { Row, Col } from "antd";

// @ts-ignore
import { onCopy } from "../colors";

export default () => (
  <Row className="box" gutter={[24, 24]}>
    <Col span={12}>
      <div className="shadow">
        <div>
          <span className="shadow-name">BG-00</span>
          <br />
          <span className="shadow-subname">背景/警告/表单输入</span>
        </div>
        <span className="shadow-value">0 0 0 #FFFFFF</span>
      </div>
    </Col>
    <Col span={12}>
      <div className="shadow shadow-1" onClick={() => onCopy("@sen-shadow-01")}>
        <div>
          <span className="shadow-name">@sen-shadow-01</span>
          <br />
          <span className="shadow-subname">一级阴影（默认向下）</span>
          <br />
          <span className="shadow-scene">时间选择器/级联选择/表单选择</span>
        </div>
        <div>
          <span className="shadow-value">
            0 1px 2px -2px rgba(10, 27, 57, 0.12)
          </span>
          <br />
          <span className="shadow-value">
            0 3px 6px 0 rgba(10, 27, 57, 0.08)
          </span>
          <br />
          <span className="shadow-value">
            0 5px 12px 4px rgba(10, 27, 57, 0.06)
          </span>
        </div>
      </div>
    </Col>
    <Col span={12}>
      <div className="shadow shadow-2" onClick={() => onCopy("@sen-shadow-02")}>
        <div>
          <span className="shadow-name">@sen-shadow-02</span>
          <br />
          <span className="shadow-subname">二级阴影（默认向下）</span>
          <br />
          <span className="shadow-scene">卡片Hover</span>
        </div>
        <div>
          <span className="shadow-value">
            0 3px 6px -4px rgba(10, 27, 57, 0.08)
          </span>
          <br />
          <span className="shadow-value">
            0 6px 16px 0 rgba(10, 27, 57, 0.06)
          </span>
          <br />
          <span className="shadow-value">
            0 9px 28px 8px rgba(10, 27, 57, 0.04)
          </span>
        </div>
      </div>
    </Col>
    <Col span={12}>
      <div className="shadow shadow-3" onClick={() => onCopy("@sen-shadow-03")}>
        <div>
          <span className="shadow-name">@sen-shadow-03</span>
          <br />
          <span className="shadow-subname">三级阴影（默认向下）</span>
          <br />
          <span className="shadow-scene">对话框、抽屉</span>
        </div>
        <div>
          <span className="shadow-value">
            0 6px 16px -8px rgba(10, 27, 57, 0.08)
          </span>
          <br />
          <span className="shadow-value">
            0 9px 28px 0 rgba(10, 27, 57, 0.04)
          </span>
          <br />
          <span className="shadow-value">
            0 12px 48px 16px rgba(10, 27, 57, 0.02)
          </span>
        </div>
      </div>
    </Col>
  </Row>
);
