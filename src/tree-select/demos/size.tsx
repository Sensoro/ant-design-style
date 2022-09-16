import { Space, TreeSelect } from "antd";
import { useState } from "react";
import type { FC } from "react";

import "../../space/index.less";

const treeData = [
  {
    value: "cloud",
    title: "云平台研发",
    children: [
      {
        value: "fe",
        title: "前端组",
        children: [
          {
            value: "fh",
            title: "小张",
          },
          {
            value: "xk",
            title: "幸康",
          },
          {
            value: "sj",
            title: "婧姐",
            disabled: true,
          },
        ],
      },
      {
        value: "be",
        title: "后端",
        children: [
          {
            value: "rn",
            title: "若南",
          },
          {
            value: "cd",
            title: "东哥",
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
          {
            value: "jf",
            title: "霁凡",
          },
          {
            value: "tt",
            title: "婷婷",
            disabled: true,
          },
        ],
      },
    ],
  },
];

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
