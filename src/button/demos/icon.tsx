import "../index.less";
import "../_docs.less";

import { PlusOutlined, FormOutlined } from "@ant-design/icons";

export default () => {
  return (
    <>
      <button type="button" className="ant-btn ant-btn-primary">
        <PlusOutlined />
        <span>编辑</span>
      </button>
      <button type="button" className="ant-btn ant-btn-default">
        <PlusOutlined />
        <span>编辑</span>
      </button>
      <button
        type="button"
        className="ant-btn ant-btn-default ant-btn-icon-only"
      >
        <PlusOutlined />
      </button>
      <button type="button" className="ant-btn ant-btn-link ant-btn-icon-only">
        <FormOutlined />
      </button>
    </>
  );
};
