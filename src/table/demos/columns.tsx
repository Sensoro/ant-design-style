import type { ColumnsType } from "antd/es/table";
import { Space } from "antd";

export interface DataType {
  key: number;
  name: string;
  desc: string;
  updateTime: number;
  execCnt: number;
  successCnt: number;
  status: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "规则名称",
    dataIndex: "name",
  },
  {
    title: "规则描述",
    dataIndex: "desc",
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
  },
  {
    title: "执行次数",
    dataIndex: "execCnt",
    sorter: (a, b) => a.execCnt - b.execCnt,
  },
  {
    title: "成功次数",
    dataIndex: "successCnt",
    sorter: (a, b) => a.successCnt - b.successCnt,
  },
  {
    title: "状态",
    dataIndex: "status",
    filters: [
      {
        text: "打开报警",
        value: "打开",
      },
      {
        text: "关闭报警",
        value: "关闭",
      },
      // {
      //   text: "关闭报警",
      //   value: "关闭",
      // },
    ],
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space>
        <a>执行记录</a>
        <a>编辑</a>
      </Space>
    ),
  },
];
