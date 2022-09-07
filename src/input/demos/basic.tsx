import "../index.less";
import "../_docs.less";

export default () => {
  return (
    <div className="demo-block">
      <input
        placeholder="请输入"
        className="ant-input"
        type="text"
        value="123"
      />

      <input
        disabled
        className="ant-input ant-input-disabled"
        type="text"
        value="李四"
      />
    </div>
  );
};
