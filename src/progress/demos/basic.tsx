import { Progress } from "antd";
import type { FC } from "react";

const App: FC = () => (
  <>
    <Progress percent={30} />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
  </>
);

export default App;
