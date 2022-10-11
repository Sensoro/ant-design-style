import { Empty, Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import NoDataPurely from "@sensoro-design/icons/NoDataPurely";

export default () => {
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Empty
        image={<NoDataPurely />}
        imageStyle={{ fontSize: 88, lineHeight: "88px" }}
        description="暂无内容"
      >
        <Button type="primary" icon={<PlusOutlined />}>
          绑定设备
        </Button>
      </Empty>
    </div>
  );
};
