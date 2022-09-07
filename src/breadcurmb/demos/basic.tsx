import "../index.less";

export default () => {
  return (
    <>
      <nav className="ant-breadcrumb">
        <ol>
          <li>
            <span className="ant-breadcrumb-link">Home</span>
            <span className="ant-breadcrumb-separator">/</span>
          </li>
          <li>
            <span className="ant-breadcrumb-link">
              <a href="">Application Center</a>
            </span>
            <span className="ant-breadcrumb-separator">/</span>
          </li>
          <li>
            <span className="ant-breadcrumb-link">
              <a href="">Application List</a>
            </span>
            <span className="ant-breadcrumb-separator">/</span>
          </li>
          <li>
            <span className="ant-breadcrumb-link">An Application</span>
            <span className="ant-breadcrumb-separator">/</span>
          </li>
        </ol>
      </nav>
    </>
  );
};
