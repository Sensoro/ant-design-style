import "../_docs.less";

import { Input } from "antd";

export default () => {
  return (
    <div className="demo-block">
      <Input placeholder="请输入" />

      <Input defaultValue="李四" />
    </div>
  );
};
