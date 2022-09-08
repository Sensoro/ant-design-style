import "../index.less";
import "../_docs.less";

import { LoadingOutlined } from "@ant-design/icons";

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
