import { Cascader } from "antd";
import type { FC } from "react";

import { options } from "./basic";

const App: FC = () => {
  return (
    <Cascader
      multiple
      showArrow
      placeholder="请选择"
      maxTagCount="responsive"
      expandTrigger="hover"
      style={{ width: 240 }}
      options={options}
      onChange={(value) => console.log(value)}
    />
  );
};

export default App;
