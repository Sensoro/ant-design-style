import { Row, Col, Timeline } from "antd";

export default () => {
  const label = (
    <div>
      <p className="ant-timeline-item-content-title">12-02</p>
      <p className="ant-timeline-item-content-text">16:01:56</p>
    </div>
  );

  const times = ["16:01:56", "15:01:56", "14:01:56"];

  return (
    <Row>
      <Col span={12}>
        <Timeline mode="left">
          {times.map((time) => (
            <Timeline.Item key={time} color="gray" label={time}>
              <p className="ant-timeline-item-content-title">
                这是一行标题文字
              </p>
              <p className="ant-timeline-item-content-text">这是一行描述文字</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </Col>
      <Col span={12}>
        <Timeline mode="left">
          <Timeline.Item color="gray" label={label}>
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>

          {times.slice(1, 3).map((time) => (
            <Timeline.Item key={time} color="gray" label={time}>
              <p className="ant-timeline-item-content-title">
                这是一行标题文字
              </p>
              <p className="ant-timeline-item-content-text">这是一行描述文字</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </Col>
    </Row>
  );
};
