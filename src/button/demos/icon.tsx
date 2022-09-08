import "../index.less";
import "../_docs.less";

import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default () => {
  return (
    <>
      <Button type="primary" icon={<PlusOutlined />}>
        编辑
      </Button>
      <Button icon={<PlusOutlined />}>编辑</Button>
      <Button icon={<PlusOutlined />} />
      <Button type="link" icon={<FormOutlined />} />
    </>
  );
};
