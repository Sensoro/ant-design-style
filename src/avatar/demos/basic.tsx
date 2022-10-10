import UserFilled from "@sensoro-design/icons/UserFilled";
import { Avatar, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical">
      <Space style={{ width: "100%" }}>
        <Avatar size={64} icon={<UserFilled />} />
        <Avatar size="large" icon={<UserFilled />} />
        <Avatar icon={<UserFilled />} />
      </Space>
      <Space>
        <Avatar shape="square" size={64} icon={<UserFilled />} />
        <Avatar shape="square" size="large" icon={<UserFilled />} />
        <Avatar shape="square" icon={<UserFilled />} />
      </Space>
    </Space>
  );
};
