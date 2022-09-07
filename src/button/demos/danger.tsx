import "../index.less";
import "../_docs.less";

export default () => {
  return (
    <>
      <button
        type="button"
        className="ant-btn ant-btn-primary ant-btn-dangerous"
      >
        <span>删除项目</span>
      </button>
      <button
        type="button"
        className="ant-btn ant-btn-default ant-btn-dangerous"
      >
        删除
      </button>
      <button type="button" className="ant-btn ant-btn-link ant-btn-dangerous">
        删除
      </button>
    </>
  );
};
