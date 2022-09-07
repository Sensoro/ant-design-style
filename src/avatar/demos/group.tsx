import "../index.less";
import "../_docs.less";

import UserFilled from "@sensoro-design/icons/UserFilled";

export default () => {
  return (
    <>
      <div className="ant-avatar-group">
        <span className="ant-avatar ant-avatar-circle ant-avatar-image">
          <img src="https://joeschmoe.io/api/v1/random" />
        </span>
        <span
          className="ant-avatar ant-avatar-circle"
          style={{ backgroundColor: "rgb(245, 106, 0)" }}
        >
          <span
            className="ant-avatar-string"
            style={{ transform: "scale(1) translateX(-50%)" }}
          >
            K
          </span>
        </span>
        <span
          className="ant-avatar ant-avatar-circle ant-avatar-icon"
          style={{ backgroundColor: "rgb(135, 208, 104)" }}
        >
          U
        </span>
        <span
          className="ant-avatar ant-avatar-circle ant-avatar-icon"
          style={{ backgroundColor: "rgb(24, 144, 255)" }}
        >
          <UserFilled />
        </span>
      </div>
    </>
  );
};
