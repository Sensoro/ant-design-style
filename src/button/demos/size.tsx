import "../index.less";
import "../_docs.less";

import { PlusOutlined, FormOutlined } from "@ant-design/icons";

export default () => {
  return (
    <div>
      <div className="demo-inline">
        <button type="button" className="ant-btn ant-btn-lg ant-btn-primary">
          <PlusOutlined />
          <span>大按钮</span>
        </button>
        <button type="button" className="ant-btn ant-btn-lg ant-btn-default">
          <PlusOutlined />
          <span>大按钮</span>
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-lg ant-btn-default ant-btn-icon-only"
        >
          <PlusOutlined />
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-lg ant-btn-link ant-btn-icon-only"
        >
          <FormOutlined />
        </button>
      </div>
      <div className="demo-inline">
        <button type="button" className="ant-btn ant-btn-primary">
          <PlusOutlined />
          <span>大按钮</span>
        </button>
        <button type="button" className="ant-btn ant-btn-default">
          <PlusOutlined />
          <span>大按钮</span>
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-default ant-btn-icon-only"
        >
          <PlusOutlined />
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-link ant-btn-icon-only"
        >
          <FormOutlined />
        </button>
      </div>
      <div className="demo-inline">
        <button type="button" className="ant-btn ant-btn-sm ant-btn-primary">
          <PlusOutlined />
          <span>大按钮</span>
        </button>
        <button type="button" className="ant-btn ant-btn-sm ant-btn-default">
          <PlusOutlined />
          <span>大按钮</span>
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-sm ant-btn-default ant-btn-icon-only"
        >
          <PlusOutlined />
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-sm ant-btn-link ant-btn-icon-only"
        >
          <FormOutlined />
        </button>
      </div>
    </div>
  );
};
