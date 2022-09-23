import { Tabs } from "antd";
import type { FC } from "react";

const App: FC = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        style={{ height: 220 }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default App;
