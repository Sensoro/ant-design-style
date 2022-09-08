import "../_docs.less";

import { Button } from "antd";

export default () => {
  return (
    <>
      <Button loading type="primary">
        主要按钮
      </Button>
      <Button loading>基础按钮</Button>
    </>
  );
};
