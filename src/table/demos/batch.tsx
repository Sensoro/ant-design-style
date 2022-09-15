import { Table, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

import type { FC, Key } from "react";
import { useState } from "react";

import "../../space/index.less";

import { columns } from "./columns";
import type { DataType } from "./columns";

const data: DataType[] = Array(10)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    name: "老人关爱",
    desc: "依赖其他规则提供的数据",
    updateTime: +new Date(),
    execCnt: 2769,
    successCnt: idx % 2 === 0 ? 2769 : 1000,
    status: idx % 2 === 0 ? "打开" : "关闭",
  }));

const App: FC = () => {
  const [selectKeys, setSelectKeys] = useState<Key[]>([0, 1]);

  const rowSelection = {
    selectedRowKeys: selectKeys,
    onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectKeys(selectedRowKeys);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.key === data.length - 1, // Column configuration not to be checked
    }),
  };
  return (
    <ConfigProvider locale={zhCN}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          showQuickJumper: true,
          showSizeChanger: true,
          total: 500,
          defaultPageSize: 10,
          defaultCurrent: 1,
          showTotal: (total) => `共 ${total} 条`,
        }}
        rowSelection={rowSelection}
      />
    </ConfigProvider>
  );
};

export default App;
