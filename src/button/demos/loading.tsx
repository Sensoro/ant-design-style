import "../index.less";
import "../_docs.less";

import { LoadingOutlined } from "@ant-design/icons";

export default () => {
  return (
    <>
      <button type="button" className="ant-btn ant-btn-primary ant-btn-loading">
        <LoadingOutlined />
        <span>主要按钮</span>
      </button>
      <button type="button" className="ant-btn ant-btn-default">
        <LoadingOutlined />
        <span>基础按钮</span>
      </button>
    </>
  );
};
