import { Tree, Button } from "antd";
import { useState } from "react";
import type { ReactNode } from "react";
import type { TreeProps } from "antd/es/tree";
import AreaOutlined from "@sensoro-design/icons/AreaOutlined";
import BuildingOutlined from "@sensoro-design/icons/BuildingOutlined";
import UnitOutlined from "@sensoro-design/icons/UnitOutlined";
import FloorOutlined from "@sensoro-design/icons/FloorOutlined";
import RoomOutlined from "@sensoro-design/icons/RoomOutlined";
import { FormOutlined } from "@ant-design/icons";
import "../../button/index.less";

const treeData = [
  {
    title: "银河西区",
    key: "0-0",
    icon: <AreaOutlined />,
    children: [
      {
        title: "南苑1号楼",
        key: "0-0-0",
        icon: <BuildingOutlined />,
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
          },
        ],
      },
      {
        title: "盛德花园4号楼",
        key: "0-0-1",
        icon: <BuildingOutlined />,
        children: [
          {
            title: "添加设备",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "盛德花园5号楼",
        key: "0-0-2",
        icon: <BuildingOutlined />,
        children: [
          {
            title: "添加设备",
            key: "0-0-2-0",
          },
        ],
      },
      {
        title: "安泰家园1号楼",
        key: "0-0-3",
        icon: <BuildingOutlined />,
        children: [
          {
            title: "1单元",
            key: "0-0-3-0",
            icon: <UnitOutlined />,
            children: [
              {
                title: "1层",
                key: "0-0-3-0-0",
                icon: <FloorOutlined />,
                children: [
                  {
                    title: "101",
                    key: "0-0-3-0-0-0",
                    icon: <RoomOutlined />,
                  },
                  {
                    title: "102",
                    key: "0-0-3-0-0-1",
                    icon: <RoomOutlined />,
                  },
                  {
                    title: "103",
                    key: "0-0-3-0-0-2",
                    icon: <RoomOutlined />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([
    "0-0",
    "0-0-3",
    "0-0-3-0",
    "0-0-3-0-0",
  ]);
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["0-0-3-0-0-0"]);
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

  const onTitleRender: TreeProps["titleRender"] = (item) => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{item.title as ReactNode}</span>
        {item.key === "0-0-0" && (
          <Button
            type="link"
            icon={<FormOutlined />}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    );
  };

  return (
    <Tree
      showIcon
      blockNode
      style={{ width: 300 }}
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
      titleRender={onTitleRender}
    />
  );
};

export default App;
