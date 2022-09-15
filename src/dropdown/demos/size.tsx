import { Button, Dropdown, Space, Menu } from "antd";
import React, { useState } from "react";
import DownOutlined from "@sensoro-design/icons/DownOutlined";
import "../../button/index.less";
import "../../menu/index.less";
import "../../space/index.less";

const menu = (
  <Menu
    selectedKeys={["3"]}
    items={[
      {
        key: "1",
        label: "铁塔专用",
      },
      {
        key: "2",
        label: "这就是一个合同",
      },
      {
        key: "3",
        label: "直签合同",
      },
    ]}
  />
);

const App = () => {
  return (
    <Space wrap size={16}>
      <Dropdown
        overlayClassName="ant-dropdown-large"
        overlay={menu}
        trigger={["click"]}
        placement="bottom"
      >
        <Button size="large">
          下拉菜单 <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
        </Button>
      </Dropdown>

      <Dropdown overlay={menu} trigger={["click"]} placement="bottom">
        <Button>
          下拉菜单 <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
        </Button>
      </Dropdown>

      <Dropdown
        overlayClassName="ant-dropdown-small"
        overlay={menu}
        trigger={["click"]}
        placement="bottom"
      >
        <Button size="small">
          下拉菜单 <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default App;
