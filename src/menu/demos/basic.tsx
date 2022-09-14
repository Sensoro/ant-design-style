import { AppstoreOutlined } from "@ant-design/icons";
import HomeOutlined from "@sensoro-design/icons/HomeOutlined";
import FolderOpenOutlined from "@sensoro-design/icons/FolderOpenOutlined";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("平台管理", "sub1", <HomeOutlined />, [
    getItem("基本设置", "1"),
    getItem("项目管理", "2"),
    getItem("用户管理", "3"),
    getItem("组织管理", "4"),
  ]),

  getItem("当前项目", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("我管理的项目", "sub4", <FolderOpenOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const App: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div style={{ backgroundColor: "#f5f6f7", padding: "32px 24px" }}>
      <Menu
        onClick={onClick}
        style={{ width: 240 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default App;
