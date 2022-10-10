import { AppstoreOutlined } from "@ant-design/icons";
import HomeOutlined from "@sensoro-design/icons/HomeOutlined";
import FolderOpenOutlined from "@sensoro-design/icons/FolderOpenOutlined";
import type { MenuProps } from "antd";
import { Menu, Button } from "antd";
import React, { useState } from "react";

import "./_doc.less";

import MenuFoldOutlined from "@sensoro-design/icons/MenuFoldOutlined";
import MenuUnfoldOutlined from "@sensoro-design/icons/MenuUnfoldOutlined";

import "../../button/index.less";
import UpOutlined from "@sensoro-design/icons/UpOutlined";
import DownOutlined from "@sensoro-design/icons/DownOutlined";

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

  getItem("当前项目", "sub2", <AppstoreOutlined />),

  getItem("我管理的项目", "sub4", <FolderOpenOutlined />, [
    getItem("禁渔禁捕", "9"),
    getItem("防违控违", "10"),
    getItem("智慧消防", "11"),
    getItem("区域管理", "12"),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f6f7",
        padding: "24px",
        height: 600,
        position: "relative",
      }}
    >
      <Button
        className={`demo-menu-action ${!collapsed && "demo-menu-action-open"}`}
        type="link"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
      />

      <Menu
        mode="inline"
        style={{ width: collapsed ? 64 : 240, height: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        inlineCollapsed={collapsed}
        items={items}
        onClick={onClick}
        expandIcon={({ isOpen }) =>
          isOpen ? <UpOutlined /> : <DownOutlined />
        }
      />
    </div>
  );
};

export default App;
