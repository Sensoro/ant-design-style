import "../index.less";

export default () => {
  return (
    <>
      <label className="ant-checkbox-wrapper ant-checkbox-wrapper-disabled">
        <span className="ant-checkbox ant-checkbox-checked ant-checkbox-disabled">
          <input type="checkbox" className="ant-checkbox-input" value="" />
          <span className="ant-checkbox-inner"></span>
        </span>
        <span>Checkbox</span>
      </label>

      <label className="ant-checkbox-wrapper ant-checkbox-wrapper-disabled">
        <span className="ant-checkbox ant-checkbox-disabled">
          <input type="checkbox" className="ant-checkbox-input" value="" />
          <span className="ant-checkbox-inner"></span>
        </span>
        <span>Checkbox</span>
      </label>
    </>
  );
};
