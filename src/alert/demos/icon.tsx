import "../index.less";
import "../_docs.less";

import {
  CheckCircleFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";

export default () => {
  return (
    <>
      <div className="ant-alert ant-alert-success">
        <CheckCircleFilled className="ant-alert-icon" />
        这是一条成功的消息提示
      </div>
      <div className="ant-alert ant-alert-info">
        <InfoCircleFilled className="ant-alert-icon" /> 这是一条普通的消息提示
      </div>
      <div className="ant-alert ant-alert-warning">
        <ExclamationCircleFilled className="ant-alert-icon" />
        <div className="ant-alert-content">
          <div className="ant-alert-message">这是一条警示信息</div>
        </div>
        <button className="ant-alert-close-icon">
          <CloseOutlined />
        </button>
      </div>
      <div className="ant-alert ant-alert-error">
        <CloseCircleFilled className="ant-alert-icon" />
        高危操作/出错信息提示
      </div>
    </>
  );
};
