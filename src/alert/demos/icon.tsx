import "../_docs.less";

import { Alert } from "antd";

export default () => {
  return (
    <>
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon closable />
      <Alert message="Warning" type="warning" showIcon closable />
      <Alert message="Error" type="error" showIcon />
    </>
  );
};
