import "../index.less";
import "../_docs.less";

import UserFilled from "@sensoro-design/icons/UserFilled";
import { Avatar } from "antd";

export default () => {
  return (
    <>
      <div className="demo-inline">
        <Avatar size={64} icon={<UserFilled />} />
        <Avatar size="large" icon={<UserFilled />} />
        <Avatar icon={<UserFilled />} />
        <Avatar size="small" icon={<UserFilled />} />
      </div>
      <div className="demo-inline">
        <Avatar shape="square" size={64} icon={<UserFilled />} />
        <Avatar shape="square" size="large" icon={<UserFilled />} />
        <Avatar shape="square" icon={<UserFilled />} />
        <Avatar shape="square" size="small" icon={<UserFilled />} />
      </div>
    </>
  );
};
