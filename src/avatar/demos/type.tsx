import UserFilled from "@sensoro-design/icons/UserFilled";

import { Avatar, Space } from "antd";

export default () => {
  return (
    <Space>
      <Avatar icon={<UserFilled />} />
      <Avatar src="https://joeschmoe.io/api/v1/random" />
    </Space>
  );
};
