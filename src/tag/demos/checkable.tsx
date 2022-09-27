import { Tag } from "antd";
import { useState } from "react";

const { CheckableTag } = Tag;

const eats = ["清蒸桂鱼", "麻辣小龙虾", "榴莲", "臭豆腐", "榴莲臭豆腐"];

export default () => {
  const [checked, setChecked] = useState(["清蒸桂鱼"]);

  const onTagChange = (tag: string, flag: boolean) => {
    const nextSelectedTags = flag
      ? [...checked, tag]
      : checked.filter((t) => t !== tag);
    setChecked(nextSelectedTags);
  };

  return (
    <>
      <h3>今晚吃啥 ？</h3>
      {eats.map((food) => {
        return (
          <CheckableTag
            key={food}
            checked={checked.includes(food)}
            onChange={(flag) => onTagChange(food, flag)}
          >
            {food}
          </CheckableTag>
        );
      })}
    </>
  );
};
