import { Space, TreeSelect } from "antd";
import React, { useState } from "react";
import type { FC } from "react";

import "../../space/index.less";

export const treeData = [
  {
    value: "cloud",
    title: "云平台研发",
    children: [
      {
        value: "fe",
        title: "前端组",
        children: [
          {
            value: "wsj",
            title: "名字过长测试-这是一行特别长的选项名称",
          },
          {
            value: "zfh",
            title: "卑微小张",
          },
        ],
      },
      {
        value: "pd",
        title: "产品组",
        children: [
          {
            value: "ll",
            title: "鹿雷",
          },
        ],
      },
    ],
  },
];

const App: FC = () => {
  const [value, setValue] = useState<string | undefined>("wsj");

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const notFoundContent = (
    <div className="ant-select-empty-content">暂无内容</div>
  );

  return (
    <Space direction="vertical" size={16}>
      <TreeSelect
        allowClear
        showSearch
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
        showSearch
        style={{ width: 240 }}
        value={["wsj", "ll"]}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="请选择"
        treeDefaultExpandedKeys={["fe"]}
        onChange={onChange}
        treeData={treeData}
      />
    </Space>
  );
};

export default App;
