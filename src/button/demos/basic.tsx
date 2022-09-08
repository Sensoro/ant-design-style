import { Button } from "antd";

import "../index.less";
import "../_docs.less";

export default () => {
  return (
    <>
      <Button type="primary">主要按钮</Button>
      <Button>默认按钮</Button>
      <Button type="dashed">虚框按钮</Button>
      <Button type="link">链接按钮</Button>
    </>
  );
};
