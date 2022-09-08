import { Button } from "antd";
import "../_docs.less";

export default () => {
  return (
    <>
      <Button danger type="primary">
        <span>删除项目</span>
      </Button>
      <Button danger>删除</Button>
      <Button type="link" danger>
        删除
      </Button>
    </>
  );
};
