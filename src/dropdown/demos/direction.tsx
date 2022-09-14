import { Button, Dropdown, Space, Menu } from "antd";
import React from "react";
import DownOutlined from "@sensoro-design/icons/DownOutlined";
import "../../button/index.less";
import "../../menu/index.less";
import "../../space/index.less";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const App = () => (
  <Space wrap size={16}>
    {/*<Dropdown overlay={menu} trigger={["click"]} placement="bottom">
      <Button type="primary">
        下拉菜单 <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
      </Button>
    </Dropdown>*/}

    <Dropdown.Button overlay={menu} icon={<DownOutlined />}>
      下拉菜单
    </Dropdown.Button>

    {/*<Dropdown overlay={menu} trigger={["click"]} placement="bottom">
      <Button>
        下拉菜单 <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
      </Button>
    </Dropdown>*/}
  </Space>
);

export default App;
