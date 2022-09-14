import "../_docs.less";

import UserFilled from "@sensoro-design/icons/UserFilled";

import { Avatar } from "antd";

export default () => {
  return (
    <div className="demo-inline">
      <Avatar icon={<UserFilled />} />
      <Avatar src="https://joeschmoe.io/api/v1/random" />
    </div>
  );
};
