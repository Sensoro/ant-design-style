import { Empty } from "antd";

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
      <Empty image={null} imageStyle={{ height: 0 }} description="暂无内容" />
    </div>
  );
};
