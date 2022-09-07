import "../index.less";
import "../_docs.less";

import UserFilled from "@sensoro-design/icons/UserFilled";
export default () => {
  return (
    <>
      <div className="demo-inline">
        <span
          className="ant-avatar ant-avatar-circle ant-avatar-icon"
          style={{
            width: 64,
            height: 64,
            lineHeight: "64px",
            fontSize: 32,
          }}
        >
          <UserFilled />
        </span>
        <span className="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon">
          <UserFilled />
        </span>
        <span className="ant-avatar ant-avatar-circle ant-avatar-icon">
          <UserFilled />
        </span>
      </div>

      <div className="demo-inline">
        <span
          className="ant-avatar ant-avatar-square ant-avatar-icon"
          style={{
            width: 64,
            height: 64,
            lineHeight: "64px",
            fontSize: 32,
          }}
        >
          <UserFilled />
        </span>
        <span className="ant-avatar ant-avatar-lg ant-avatar-square ant-avatar-icon">
          <UserFilled />
        </span>
        <span className="ant-avatar ant-avatar-square ant-avatar-icon">
          <UserFilled />
        </span>
      </div>
    </>
  );
};
