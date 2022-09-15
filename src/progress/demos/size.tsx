import { Progress } from "antd";
import type { FC } from "react";

const App: FC = () => (
  <div style={{ width: 195 }}>
    <Progress percent={30} size="small" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);

export default App;
