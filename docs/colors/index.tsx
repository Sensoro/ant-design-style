import "./index.less";

import { message, Space } from "antd";

type ColorsType =
  | "blue"
  | "violet"
  | "purple"
  | "red"
  | "orange"
  | "gold"
  | "yellow"
  | "lime"
  | "green"
  | "lightblue"
  | "grey";

const colors: ColorsType[] = [
  "blue",
  "violet",
  "purple",
  "red",
  "orange",
  "gold",
  "yellow",
  "lime",
  "green",
  "lightblue",
  "grey",
];

const colorsMap: Record<ColorsType, any> = {
  blue: {
    label: "品牌色 - 蓝色 Blue",
    colors: [
      "#f0f8ff",
      "#d4e9ff",
      "#abd1ff",
      "#82b6ff",
      "#5591f2",
      "#2b6de5",
      "#1b4fbf",
      "#0e3599",
      "#052073",
      "#02124d",
    ],
  },
  violet: {
    label: "蓝紫色 Violet",
    colors: [
      "#f3f0ff",
      "#eeebff",
      "#cbc2ff",
      "#a599ff",
      "#7b6ffc",
      "#4a42f0",
      "#2f2cc9",
      "#1d20A3",
      "#0f147d",
      "#0a1057",
    ],
  },
  purple: {
    label: "紫色 Purple",
    colors: [
      "#fbf0ff",
      "#f9ebff",
      "#ecc2ff",
      "#db99ff",
      "#c06cf5",
      "#a140e7",
      "#7f2dc2",
      "#5e1c9c",
      "#410f75",
      "#29094f",
    ],
  },
  red: {
    label: "红色 Red",
    colors: [
      "#fff1f0",
      "#ffcbc7",
      "#ffa19e",
      "#ff7575",
      "#ff4d52",
      "#f72231",
      "#d11326",
      "#ab071d",
      "#850016",
      "#5e0013",
    ],
  },
  orange: {
    label: " 橙色 Orange",
    colors: [
      "#fff7e6",
      "#ffe1a8",
      "#ffce80",
      "#ffb957",
      "#ffa12e",
      "#f98206",
      "#d46600",
      "#ad4e00",
      "#873800",
      "#612500",
    ],
  },
  gold: {
    label: "黄昏色 Gold",
    colors: [
      "#fffbe6",
      "#ffeea8",
      "#ffe180",
      "#ffd257",
      "#ffc02e",
      "#f9aa06",
      "#d48600",
      "#ad6800",
      "#874d00",
      "#613400",
    ],
  },
  yellow: {
    label: "黄色 Yellow",
    colors: [
      "#feffe6",
      "#ffffa8",
      "#fffb80",
      "#fff457",
      "#ffea2e",
      "#f9d806",
      "#d4b000",
      "#ad8b00",
      "#876800",
      "#614700",
    ],
  },
  lime: {
    label: "亮绿色 Lime",
    colors: [
      "#f9ffe6",
      "#e9ffb3",
      "#d5fa87",
      "#baed5a",
      "#9de031",
      "#80d40c",
      "#60ad02",
      "#468700",
      "#2f6100",
      "#1a3b00",
    ],
  },
  green: {
    label: "绿色 Green",
    colors: [
      "#edfff4",
      "#c4ffdd",
      "#94f2be",
      "#67e6a4",
      "#3fd98e",
      "#1acb7c",
      "#0da666",
      "#048050",
      "#00593a",
      "#003323",
    ],
  },
  lightblue: {
    label: "亮蓝色 Light-blue",
    colors: [
      "#F0FEFF",
      "#D6FAFF",
      "#ADF3FF",
      "#85E9FF",
      "#59D5F7",
      "#2EBBEA",
      "#1D95C4",
      "#10719E",
      "#065078",
      "#033452",
    ],
  },
  grey: {
    label: "中性色 - 灰色 Grey",
    colors: [
      "#fbfbfc",
      "#f6f7f8",
      "#f1f2f4",
      "#eceef0",
      "#dbdee2",
      "#c2c7ce",
      "#aab0ba",
      "#6d7789",
      "#3c4961",
      "#0a1b39",
    ],
  },
};

export function onCopy(color: string) {
  const textareaC = document.createElement("textarea");
  textareaC.setAttribute("readonly", "readonly"); //设置只读属性防止手机上弹出软键盘
  textareaC.value = color;
  document.body.appendChild(textareaC); //将textarea添加为body子元素
  textareaC.select();
  const res = document.execCommand("copy");
  document.body.removeChild(textareaC); //移除DOM元素
  message.success(`${color} copied 🎉`);
  return res;
}

export default () => (
  <Space className="colors" direction="vertical" size={32}>
    {colors.map((color) => {
      const { label, colors = [] } = colorsMap[color];
      return (
        <Space key={color} direction="vertical" size={16}>
          <span>{label}</span>
          <Space wrap>
            {Array(10)
              .fill(0)
              .map((_, idx) => (
                <Space direction="vertical" key={idx}>
                  <div
                    className={`${color}-${idx + 1} color-box`}
                    style={{ color: idx > 4 ? "#fff" : "#000" }}
                    onClick={() => onCopy(`${color}-${idx + 1}`)}
                  >
                    {colors[idx]}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {idx !== 9 && 0}
                    {idx + 1}
                  </div>
                </Space>
              ))}
          </Space>
        </Space>
      );
    })}
  </Space>
);
