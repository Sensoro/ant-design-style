import "../index.less";
import "../_docs.less";

export default () => {
  return (
    <>
      <button type="button" className="ant-btn ant-btn-primary">
        主要按钮
      </button>
      <button type="button" className="ant-btn ant-btn-default">
        默认按钮
      </button>
      <button type="button" className="ant-btn ant-btn-dashed">
        虚框按钮
      </button>
      <button type="button" className="ant-btn ant-btn-link">
        链接按钮
      </button>
    </>
  );
};
