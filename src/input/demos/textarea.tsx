import "../index.less";
import "../_docs.less";

import { Input } from "antd";

export default () => {
  return (
    <div className="demo-block">
      <Input.TextArea showCount maxLength={20} placeholder="请输入" />
      <Input.TextArea
        showCount
        allowClear
        maxLength={20}
        placeholder="请输入"
        defaultValue="清蒸桂鱼、麻辣小龙虾"
      />
      <Input.TextArea showCount maxLength={100} placeholder="请输入" />
    </div>
  );
};
