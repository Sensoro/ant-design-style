import { Alert, Space } from "antd";
import CheckCircleFilled from "@sensoro-design/icons/CheckCircleFilled";
import InfoCircleFilled from "@sensoro-design/icons/InfoCircleFilled";
import ExclamationCircleFilled from "@sensoro-design/icons/ExclamationCircleFilled";
import CloseCircleFilled from "@sensoro-design/icons/CloseCircleFilled";

export default () => {
  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <Alert
        message="Success Tips"
        type="success"
        showIcon
        icon={<CheckCircleFilled />}
      />
      <Alert
        message="Informational Notes"
        type="info"
        showIcon
        closable
        icon={<InfoCircleFilled />}
      />
      <Alert
        message="Warning"
        type="warning"
        showIcon
        closable
        icon={<ExclamationCircleFilled />}
      />
      <Alert
        message="Error"
        type="error"
        showIcon
        icon={<CloseCircleFilled />}
      />
    </Space>
  );
};
