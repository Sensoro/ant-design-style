import { Button, Dropdown, Space, Menu } from "antd";
import React from "react";
import DownOutlined from "@sensoro-design/icons/DownOutlined";
import "../../button/index.less";
import "../../menu/index.less";
import "../../space/index.less";

const menu = (
  <Menu
    defaultSelectedKeys={["3"]}
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

const App = () => (
  <Space wrap size={16}>
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
      <Button type="primary">
        下拉菜单
        <DownOutlined style={{ fontSize: 16, marginLeft: 4 }} />
      </Button>
    </Dropdown>

    <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
      <Button>
        下拉菜单 <DownOutlined style={{ fontSize: 16, marginLeft: 4 }} />
      </Button>
    </Dropdown>

    <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
      <Button>
        下拉菜单等宽 <DownOutlined style={{ fontSize: 16, marginLeft: 4 }} />
      </Button>
    </Dropdown>
  </Space>
);

export default App;
