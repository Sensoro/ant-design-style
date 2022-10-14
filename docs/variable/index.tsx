import "./index.less";
import { Space } from "antd";
import CopyOutlined from "@sensoro-design/icons/CopyOutlined";
import { onCopy } from "../colors";

const variables = [
  {
    name: "margin",
    label: "外边距",
    desc: "4 倍原则",
    values: [
      {
        name: "lg",
        value: 24,
      },
      {
        name: "md",
        value: 16,
      },
      {
        name: "sm",
        value: 12,
      },
      {
        name: "xs",
        value: 8,
      },
      {
        name: "xss",
        value: 4,
      },
    ],
  },
  {
    name: "padding",
    label: "内边距",
    desc: "4 倍原则",
    values: [
      {
        name: "lg",
        value: 24,
      },
      {
        name: "md",
        value: 16,
      },
      {
        name: "sm",
        value: 12,
      },
      {
        name: "xs",
        value: 8,
      },
      {
        name: "xss",
        value: 4,
      },
    ],
  },
];

export default () => {
  return (
    <div className="styles-variable">
      {variables.map((item) => {
        const { name, label, desc, values } = item;
        return (
          <Space>
            <Space direction="vertical" size={0}>
              <h3>
                {name} - {label}
              </h3>
              <ul className="demo">
                {values.map((_) => {
                  return (
                    <li>
                      <span>
                        @{name}-{_.name}: {_.value}px
                      </span>

                      <CopyOutlined
                        className="copy-icon"
                        onClick={() => onCopy(`@${name}-${_.name}`)}
                      />
                    </li>
                  );
                })}
              </ul>
            </Space>
          </Space>
        );
      })}
    </div>
  );
};
