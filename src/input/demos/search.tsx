import "../index.less";
import "../_docs.less";
import { SearchOutlined } from "@ant-design/icons";
export default () => {
  return (
    <div className="input-search-demo">
      <span className="ant-input-group-wrapper ant-input-search">
        <span className="ant-input-wrapper ant-input-group">
          <input placeholder="请输入关键词" className="ant-input" type="text" />
          <span className="ant-input-group-addon">
            <button
              type="button"
              className="ant-btn ant-btn-default ant-btn-icon-only ant-input-search-button"
            >
              <SearchOutlined />
            </button>
          </span>
        </span>
      </span>

      <span className="ant-input-group-wrapper ant-input-search">
        <span className="ant-input-wrapper ant-input-group">
          <input
            disabled
            placeholder="请输入关键词"
            className="ant-input ant-input-disabled"
            type="text"
          />
          <span className="ant-input-group-addon">
            <button
              disabled
              type="button"
              className="ant-btn ant-btn-default ant-btn-icon-only ant-input-search-button"
            >
              <SearchOutlined />
            </button>
          </span>
        </span>
      </span>
    </div>
  );
};
