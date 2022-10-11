import { Cascader, Space } from "antd";
import type { FC } from "react";

import { options } from "./basic";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";

const App: FC = () => {
  return (
    <Space direction="vertical">
      <Cascader
        multiple
        showArrow
        size="large"
        placeholder="请选择"
        maxTagCount="responsive"
        clearIcon={<CloseOutlined />}
        style={{ width: 240 }}
        options={options}
        onChange={(value) => console.log(value)}
      />
      <Cascader
        multiple
        showArrow
        placeholder="请选择"
        maxTagCount="responsive"
        clearIcon={<CloseOutlined />}
        style={{ width: 240 }}
        options={options}
        onChange={(value) => console.log(value)}
      />
      <Cascader
        multiple
        showArrow
        size="small"
        placeholder="请选择"
        maxTagCount="responsive"
        clearIcon={<CloseOutlined />}
        style={{ width: 240 }}
        options={options}
        onChange={(value) => console.log(value)}
      />
    </Space>
  );
};

export default App;
