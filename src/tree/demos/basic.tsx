import { Tree } from "antd";
import { useState } from "react";
import type { TreeProps } from "antd/es/tree";

const treeData = [
  {
    title: "感知设备",
    key: "0-0",
    children: [
      {
        title: "实时视频",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
          },
          {
            title: "0-0-0-2",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "视频设备",
        key: "0-0-1",
        children: [
          {
            title: "添加设备",
            key: "0-0-1-0",
          },
          {
            title: "设置设备",
            key: "0-0-1-1",
          },
          {
            title: "删除设备",
            key: "0-0-1-2",
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    title: "AI 人工智能",
    key: "0-1",
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0",
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1",
      },
      {
        title: "0-1-0-2",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: "视频 AI 识别",
    key: "0-2",
  },
];

const App = () => {
  const [expandedKeys, setExpandedKeys] = useState(["0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState<string[]>([
    "0-0-1-0",
    "0-0-1-2",
    "0-1-0-0",
  ]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand: TreeProps["onExpand"] = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue as string[]);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue as string[]);
  };

  const onSelect: TreeProps["onSelect"] = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue as string[]);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default App;
