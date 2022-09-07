import "../index.less";
import "../_docs.less";

export default () => {
  return (
    <>
      <div className="ant-alert ant-alert-success">这是一条成功的消息提示</div>
      <div className="ant-alert ant-alert-info">这是一条普通的消息提示</div>
      <div className="ant-alert ant-alert-warning">这是一条警示信息</div>
      <div className="ant-alert ant-alert-error">高危操作/出错信息提示</div>
    </>
  );
};
