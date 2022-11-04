import { Cascader, Space } from "antd";
import type { FC } from "react";

export const options = [
  {
    value: "cloud",
    label: "云平台研发",
    children: [
      {
        value: "fe",
        label: "前端组",
        children: [
          {
            value: "fh",
            label: "小张",
          },
          {
            value: "xk",
            label: "幸康",
          },
          {
            value: "sj",
            label: "婧姐",
          },
          {
            value: "long",
            label: "这是11长度测试",
          },
        ],
      },
      {
        value: "be",
        label: "后端",
        children: [
          {
            value: "rn",
            label: "若南",
          },
          {
            value: "cd",
            label: "东哥",
          },
        ],
      },
      {
        value: "pd",
        label: "产品组",
        children: [
          {
            value: "ll",
            label: "鹿雷",
          },
          {
            value: "jf",
            label: "霁凡",
          },
          {
            value: "tt",
            label: "婷婷",
          },
        ],
      },
    ],
  },
  {
    value: "ar",
    label: "架构",
    children: [
      {
        value: "ar-fe",
        label: "前端",
        children: [
          {
            value: "xn",
            label: "小妞",
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: "len",
    label: "长度测试",
    children: [
      {
        value: "l-0",
        label: "长度一",
        children: [
          {
            value: "l-0-0",
            label: "这是一个长一点的选项展示嘿嘿嘿嘿嘿",
          },
          {
            value: "l-0-1",
            label: "嘿嘿",
          },
        ],
      },
    ],
  },
];

const App: FC = () => {
  return (
    <Space direction="vertical">
      <Space>
        正常展示
        <Cascader
          defaultValue={["cloud", "fe", "sj"]}
          placeholder="请选择"
          style={{ width: 240 }}
          options={options}
          onChange={(value) => console.log(value)}
        />
      </Space>
      <Space>
        禁用展示
        <Cascader
          disabled
          defaultValue={["cloud", "fe", "sj"]}
          placeholder="请选择"
          style={{ width: 240 }}
          options={options}
          onChange={(value) => console.log(value)}
        />
      </Space>
      <Space>
        走查专用
        <Cascader
          defaultOpen
          defaultValue={["cloud", "fe", "long"]}
          placeholder="请选择"
          style={{ width: 240 }}
          options={options}
          onChange={(value) => console.log(value)}
        />
      </Space>
    </Space>
  );
};

export default App;
