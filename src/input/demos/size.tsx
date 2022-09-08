import "../index.less";
import "../_docs.less";

import { Input } from "antd";

export default () => {
  return (
    <div className="demo-block">
      <Input placeholder="请输入" size="large" />

      <Input placeholder="请输入" />

      <Input placeholder="请输入" size="small" />
    </div>
  );
};
