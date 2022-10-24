import UserFilled from "@sensoro-design/icons/UserFilled";
import UserPurely from "@sensoro-design/icons/UserPurely";
import { Avatar, Space } from "antd";

export default () => {
  return (
    <Space direction="vertical">
      <Space style={{ width: "100%" }}>
        <Avatar size={64} style={{ fontSize: 64 }} icon={<UserPurely />} />
        <Avatar size="large" icon={<UserPurely />} />
        <Avatar icon={<UserPurely />} />
      </Space>
      <Space>
        <Avatar
          shape="square"
          size={64}
          style={{ fontSize: 64 }}
          icon={<UserPurely />}
        />
        <Avatar shape="square" size="large" icon={<UserPurely />} />
        <Avatar shape="square" icon={<UserPurely />} />
      </Space>
    </Space>
  );
};
