import { Button, Dropdown, Space, Menu } from "antd";
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

const App = () => (
  <Space wrap size={16}>
    <Dropdown overlay={menu} trigger={["click"]} placement="bottom">
      <Button type="link">
        创建合同 <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
      </Button>
    </Dropdown>
  </Space>
);

export default App;
