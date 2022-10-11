import "./index.less";

import { Row, Col } from "antd";

// @ts-ignore
import { onCopy } from "../colors";

export default () => (
  <Row className="box" gutter={[24, 24]}>
    <Col span={8}>
      <div className="shadow">
        <span>BG-white</span>
        <br />
        背景/警告/表单输入
      </div>
    </Col>
    <Col span={8}>
      <div
        className="shadow shadow-1"
        onClick={() =>
          onCopy(
            "0 0 1px 0 rgba(60, 73, 97, 0.08), 0 1px 2px 0 rgba(109, 119, 137, 0.16);"
          )
        }
      >
        <div>
          <span className="shadow-name">@sen-shadow-1</span>
          <br />
          卡片背景1
        </div>
        <div>
          <span className="shadow-value">
            x，y，blur ( 0，0，1 ) #3C4961，0.08
          </span>
          <br />
          <span className="shadow-value">
            x，y，blur ( 0，1，2 ) #6D7789，0.16
          </span>
        </div>
      </div>
    </Col>
    <Col span={8}>
      <div
        className="shadow shadow-2"
        onClick={() =>
          onCopy(
            "0 0 2px 0 rgba(60, 73, 97, 0.08), 0 4px 8px 0 rgba(109, 119, 137, 0.16);"
          )
        }
      >
        <div>
          <span className="shadow-name">@sen-shadow-2</span>
          <br />
          卡片背景2
        </div>
        <div>
          <span className="shadow-value">
            x，y，blur ( 0，0，2 ) #3C4961，0.08
          </span>
          <br />
          <span className="shadow-value">
            x，y，blur ( 0，4，8 ) #6D7789，0.16
          </span>
        </div>
      </div>
    </Col>
    <Col span={8}>
      <div
        className="shadow shadow-3"
        onClick={() =>
          onCopy(
            "0 2px 4px 0 rgba(60, 73, 97, 0.04), 0 8px 16px 0 rgba(109, 119, 137, 0.16);"
          )
        }
      >
        <div>
          <span className="shadow-name">@sen-shadow-3</span>
          <br />
          时间选择器/级联选择/表单选择
        </div>
        <div>
          <span className="shadow-value">
            x，y，blur ( 0，2，4 ) #3C4961，0.04
          </span>
          <br />
          <span className="shadow-value">
            x，y，blur ( 0，8，16 ) #6D7789，0.16
          </span>
        </div>
      </div>
    </Col>
    <Col span={8}>
      <div
        className="shadow shadow-4"
        onClick={() =>
          onCopy(
            "0 2px 8px 0 rgba(60, 73, 97, 0.04), 0 16px 24px 0 rgba(109, 119, 137, 0.16);"
          )
        }
      >
        <div>
          <span className="shadow-name">@sen-shadow-4</span>
          <br />
          卡片hover
        </div>
        <div>
          <span className="shadow-value">
            x，y，blur ( 0，2，8 ) #3C4961，0.04
          </span>
          <br />
          <span className="shadow-value">
            x，y，blur ( 0，16，24 ) #6D7789，0.16
          </span>
        </div>
      </div>
    </Col>
    <Col span={8}>
      <div
        className="shadow shadow-5"
        onClick={() =>
          onCopy(
            "0 2px 8px 0 rgba(60, 73, 97, 0.08), 0 20px 32px 0 rgba(109, 119, 137, 0.24);"
          )
        }
      >
        <div>
          <span className="shadow-name">@sen-shadow-5</span>
          <br />
          弹窗
        </div>
        <div>
          <span className="shadow-value">
            x，y，blur ( 0，2，8 ) #3C4961，0.08{" "}
          </span>
          <br />
          <span className="shadow-value">
            x，y，blur ( 0，20，32 ) #6D7789，0.24{" "}
          </span>
        </div>
      </div>
    </Col>
  </Row>
);
