import "../index.less";

export default () => {
  return (
    <>
      <label className="ant-checkbox-wrapper">
        <span className="ant-checkbox">
          <input type="checkbox" className="ant-checkbox-input" value="" />
          <span className="ant-checkbox-inner"></span>
        </span>
        <span>多选</span>
      </label>

      <label className="ant-checkbox-wrapper">
        <span className="ant-checkbox ant-checkbox-checked">
          <input type="checkbox" className="ant-checkbox-input" value="" />
          <span className="ant-checkbox-inner"></span>
        </span>
        <span>选中</span>
      </label>

      <label className="ant-checkbox-wrapper">
        <span className="ant-checkbox ant-checkbox-indeterminate">
          <input
            type="checkbox"
            className="ant-checkbox-input"
            value=""
            aria-checked="mixed"
          />
          <span className="ant-checkbox-inner"></span>
        </span>
        <span>半选</span>
      </label>
    </>
  );
};
