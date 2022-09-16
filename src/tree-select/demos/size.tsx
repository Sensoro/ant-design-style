import { Space, TreeSelect } from "antd";
import { useState } from "react";
import type { FC } from "react";

import "../../space/index.less";

import { treeData } from "./basic";

const App: FC = () => {
  const [value, setValue] = useState<string[] | undefined>(["xk", "fh"]);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const notFoundContent = (
    <div className="ant-select-empty-content">暂无内容</div>
  );

  return (
    <Space direction="vertical" size={16}>
      <TreeSelect
        multiple
        treeDefaultExpandAll
        size="large"
        placeholder="请选择"
        treeNodeFilterProp="title"
        style={{ width: 240 }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        value={value}
        onChange={onChange}
        treeData={treeData}
        notFoundContent={notFoundContent}
      />

      <TreeSelect
        multiple
        treeDefaultExpandAll
        placeholder="请选择"
        treeNodeFilterProp="title"
        style={{ width: 240 }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        value={value}
        onChange={onChange}
        treeData={treeData}
        notFoundContent={notFoundContent}
      />

      <TreeSelect
        multiple
        treeDefaultExpandAll
        size="small"
        placeholder="请选择"
        style={{ width: 240 }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        value={value}
        onChange={onChange}
        treeData={treeData}
        notFoundContent={notFoundContent}
      />
    </Space>
  );
};

export default App;
