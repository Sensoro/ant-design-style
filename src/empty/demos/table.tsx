import { Empty, Table } from "antd";

import NoDataPurely from "@sensoro-design/icons/NoDataPurely";

import { columns } from "../../table/demos/columns";

export default () => {
  return (
    <Table
      columns={columns}
      locale={{
        emptyText: (
          <Empty
            style={{ margin: "72px 0" }}
            image={<NoDataPurely />}
            imageStyle={{ fontSize: 88, lineHeight: "88px" }}
            description="暂无内容"
          />
        ),
      }}
    />
  );
};
