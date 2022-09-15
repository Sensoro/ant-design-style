import { Table, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

import type { FC } from "react";

import "../../space/index.less";

import { columns } from "./columns";
import type { DataType } from "./columns";
import { ColumnsType } from "antd/es/table";

const data: DataType[] = Array(10)
  .fill(0)
  .map((_, idx) => ({
    key: idx + 1,
    name: "老人关爱",
    desc: "依赖其他规则提供的数据",
    updateTime: +new Date(),
    execCnt: 2769,
    successCnt: idx % 2 === 0 ? 2769 : 1000,
    status: idx % 2 === 0 ? "打开" : "关闭",
  }));

const App: FC = () => {
  const fixedColumns: ColumnsType<DataType> = columns.slice(
    0,
    columns.length - 1
  );

  return (
    <ConfigProvider locale={zhCN}>
      <Table
        size="middle"
        columns={fixedColumns}
        dataSource={data}
        pagination={{
          size: "small",
          showQuickJumper: true,
          showSizeChanger: true,
          total: 500,
          defaultPageSize: 10,
          defaultCurrent: 1,
          showTotal: (total) => `共 ${total} 条`,
        }}
      />
    </ConfigProvider>
  );
};

export default App;
