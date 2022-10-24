import UserPurely from "@sensoro-design/icons/UserPurely";

import { Avatar, Space } from "antd";

export default () => {
  return (
    <Space>
      <Avatar icon={<UserPurely />} />
      <Avatar src="https://joeschmoe.io/api/v1/random" />
    </Space>
  );
};
