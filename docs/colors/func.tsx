import "./index.less";

import { Space, Table, Row, Col } from "antd";

// @ts-ignore
import { primaryColumns, primaryData } from "./primary";
// @ts-ignore
import { neutralColumns, neutralData } from "./neutral";

const colors = [
  {
    title: "链接",
    type: "link",
    desc: "通常用于表达完成、开启、链接、提醒等状态",
    color: "primary",
  },
  {
    title: "成功",
    type: "success",
    desc: "通常用于表达成功、完成、开启状态",
    color: "green",
  },
  {
    title: "警示",
    type: "warning",
    desc: "通常用于表达警告、不安全状态",
    color: "gold",
  },
  {
    title: "危险",
    type: "danger",
    desc: "通常用于表达危险状态",
    color: "red",
  },
];

const reactions = [
  {
    label: "常规",
    name: "regular",
    color: 6,
  },
  {
    label: "悬浮",
    name: "hover",
    color: 5,
  },
  {
    label: "点击",
    name: "active",
    color: 7,
  },
  {
    label: "禁用",
    name: "disabled",
    color: 3,
  },
  {
    label: "特殊场景",
    name: "bg-02",
    color: 2,
  },
  {
    label: "浅色背景",
    name: "bg-01",
    color: 1,
  },
];

export default () => (
  <Space className="func" direction="vertical" size={32}>
    <Space direction="vertical">
      <h2>主要颜色 - primary</h2>
      <Table
        pagination={false}
        columns={primaryColumns}
        dataSource={primaryData}
      />
    </Space>
    <Space direction="vertical">
      <h2>中性色 - neutral</h2>
      <Table
        pagination={false}
        columns={neutralColumns}
        dataSource={neutralData}
      />
    </Space>

    {colors.map((item) => {
      const { title, type, color, desc } = item;
      return (
        <div key={type}>
          <h2>
            {title} - {type}
          </h2>
          <p>{desc}</p>
          <Row>
            {reactions.map((reaction) => (
              <Col className="func-type" span={4} key={reaction.name}>
                <div className={`${color}-${reaction.color}`} />
                <p>
                  color-{type}-{reaction.name}
                </p>
                <p>{reaction.label}</p>
                <p>
                  {type}-{reaction.color}
                </p>
              </Col>
            ))}
          </Row>
        </div>
      );
    })}
  </Space>
);
