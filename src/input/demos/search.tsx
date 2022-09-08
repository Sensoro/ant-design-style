import "../index.less";
import "../_docs.less";

import { Input } from "antd";

export default () => {
  return (
    <div className="input-search-demo">
      <Input.Search placeholder="请输入关键词" />

      <Input.Search
        allowClear
        placeholder="请输入关键词"
        defaultValue="海海海"
      />

      <Input.Search disabled placeholder="请输入关键词" />
    </div>
  );
};
