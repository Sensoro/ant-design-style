export const primaryColumns = [
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
    dataIndex: "color",
    title: "色值",
  },
  {
    dataIndex: "usage",
    title: "用法",
  },
];

export const primaryData = [
  {
    key: 1,
    name: "color-primary-default",
    value: "blue-6",
    color: "#2b6de5",
    usage: "主要颜色。仅在需要非常强调的情况下使用。",
  },
  {
    key: 2,
    name: "color-primary-hover",
    value: "blue-5",
    color: "#5591f2",
    usage: "主要颜色-悬浮",
  },
  {
    key: 3,
    name: "color-primary-active",
    value: "blue-7",
    color: "#1b4fbf",
    usage: "主要颜色-点击",
  },
  {
    key: 4,
    name: "color-primary-disabled",
    value: "blue-3",
    color: "#abd1ff",
    usage: "主要颜色-禁用",
  },
  {
    key: 5,
    name: "color-primary-light-default",
    value: "blue-1",
    color: "#f0f8ff",
    usage: "浅版主要颜色（多用于背景）。仅在需要非常强调的情况下使用。",
  },
];
