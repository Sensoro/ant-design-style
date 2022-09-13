import { Tag } from "antd";
import "./_docs.less";

export default () => {
  return (
    <>
      <div className="colors-demo">
        <label>深色</label>
        <Tag color="#f72231">#f72231</Tag>
        <Tag color="#2f54eb">#2f54eb</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#f98206">#f98206</Tag>
        <Tag color="#f9aa06">#f9aa06</Tag>
      </div>

      <div className="colors-demo">
        <label>浅色</label>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </div>
    </>
  );
};
