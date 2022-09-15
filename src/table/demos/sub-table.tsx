import { Badge, Space, Table } from "antd";
import React from "react";

import "../../space/index.less";
import "../../badge/index.less";

import { columns } from "./columns";
import type { DataType } from "./columns";
import { ColumnsType } from "antd/es/table";

const data: DataType[] = Array(3)
  .fill(0)
  .map((_, idx) => ({
    key: idx + 1,
    name: "老人关爱",
    desc: "依赖其他规则提供的数据",
    updateTime: "2022-09-15",
    execCnt: 2769,
    successCnt: idx % 2 === 0 ? 2769 : 1000,
    status: idx % 2 === 0 ? "打开" : "关闭",
  }));

const App: React.FC = () => {
  const expandColumns: ColumnsType<DataType> = columns.filter(
    (_, idx) => idx < 3 || idx === columns.length - 1
  );

  const expandedRowRender = () => {
    return (
      <Table columns={expandColumns} dataSource={data} pagination={false} />
    );
  };

  return (
    <Table
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
      dataSource={data}
    />
  );
};

export default App;
