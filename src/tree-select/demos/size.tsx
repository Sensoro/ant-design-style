import { Radio, Space, TreeSelect } from "antd";
import React, { useState } from "react";
import type { FC } from "react";

import "../../space/index.less";

import { treeData } from "./basic";

const App: FC = () => {
  const [type, setType] = useState<undefined | number | "responsive">();
  const [value, setValue] = useState<string[] | undefined>(["xk", "fh", "rn"]);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const notFoundContent = (
    <div className="ant-select-empty-content">暂无内容</div>
  );

  return (
    <Space direction="vertical" size={16}>
      <Radio.Group value={type} onChange={(e) => setType(e.target.value)}>
        <Radio value={undefined}>默认</Radio>
        <Radio value={2}>超过2个隐藏</Radio>
        <Radio value="responsive">自适应</Radio>
      </Radio.Group>

      <TreeSelect
        multiple
        showArrow
        treeDefaultExpandAll
        maxTagCount={type}
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
        showArrow
        treeDefaultExpandAll
        maxTagCount={type}
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
        showArrow
        treeDefaultExpandAll
        maxTagCount={type}
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
