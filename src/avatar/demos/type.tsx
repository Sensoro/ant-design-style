import "../index.less";
import "../_docs.less";

import UserFilled from "@sensoro-design/icons/UserFilled";

import { Avatar } from "antd";

export default () => {
  return (
    <div className="demo-inline">
      <Avatar icon={<UserFilled />} />
      <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        src={<img src="https://joeschmoe.io/api/v1/random" width={32} />}
      />
      <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
        U
      </Avatar>
      <Avatar
        style={{ backgroundColor: "#87d068", color: "#fff" }}
        icon={<UserFilled />}
      />
    </div>
  );
};
