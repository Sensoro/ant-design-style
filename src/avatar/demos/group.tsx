import "../index.less";
import "../_docs.less";

import UserFilled from "@sensoro-design/icons/UserFilled";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export default () => {
  return (
    <>
      <Avatar.Group>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserFilled />} />
        <Avatar
          style={{ backgroundColor: "#1890ff" }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </>
  );
};
