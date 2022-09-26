export const neutralColumns = [
  {
    dataIndex: "name",
    title: "名称",
    render: (name: string, record: any) => {
      return (
        <div className="func-color">
          <span
            className="func-color-demo"
            style={{ background: record.color }}
          />
          {name}
        </div>
      );
    },
  },
  {
    dataIndex: "value",
    title: "对应色盘",
  },
  {
    dataIndex: "opacity",
    title: "透明度",
  },
  {
    dataIndex: "usage",
    title: "用法",
  },
];

export const neutralData = [
  {
    key: 1,
    name: "color-neutral-bg-1",
    value: "grey-1",
    opacity: "2%",
    color: "#fbfbfc",
    usage: "背景 - 浅背景色",
  },
  {
    key: 2,
    name: "color-neutral-bg-2",
    value: "grey-2",
    opacity: "4%",
    color: "#f6f7f8",
    usage: "背景 - 中色景色",
  },
  {
    key: 3,
    name: "color-neutral-bg-3",
    value: "grey-3",
    opacity: "6%",
    color: "#f1f2f4",
    usage: "背景 - 深色景色",
  },
  {
    key: 4,
    name: "color-neutral-line",
    value: "grey-4",
    opacity: "8%",
    color: "#eceef0",
    usage: "描边",
  },
  {
    key: 5,
    name: "color-neutral-bg-4",
    value: "grey-5",
    opacity: "15%",
    color: "#dbdee2",
    usage: "背景 - 重/特殊场景",
  },
  {
    key: 6,
    name: "@color-neutral-bg-5",
    value: "grey-6",
    opacity: "25%",
    color: "#c2c7ce",
    usage: "背景 - 强调/特殊场景",
  },
  {
    key: 7,
    name: "color-neutral-text-4",
    value: "grey-7",
    opacity: "35%",
    color: "#aab0ba",
    usage: "文本/图标颜色 - 最次要",
  },
  {
    key: 8,
    name: "color-neutral-text-3",
    value: "grey-8",
    opacity: "60%",
    color: "#6d7789",
    usage: "文本/图标颜色 - 次要",
  },
  {
    key: 9,
    name: "color-neutral-text-2",
    value: "grey-9",
    opacity: "80%",
    color: "#3c4961",
    usage: "文本/图标颜色 - 稍次要",
  },
  {
    key: 10,
    name: "color-neutral-text-1",
    value: "grey-10",
    opacity: "100%",
    color: "#0a1b39",
    usage: "文本/图标颜色 - 最主要",
  },
];
