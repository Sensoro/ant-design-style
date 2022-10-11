import { Cascader, Radio, Space } from "antd";
import type { FC } from "react";

import { options } from "./basic";
import { CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const App: FC = () => {
  const [type, setType] = useState<undefined | number | "responsive">();

  return (
    <Space direction="vertical" size={16}>
      <Radio.Group value={type} onChange={(e) => setType(e.target.value)}>
        <Radio value={undefined}>默认</Radio>
        <Radio value={3}>超过3个隐藏</Radio>
        <Radio value="responsive">自适应</Radio>
      </Radio.Group>

      <Cascader
        multiple
        showArrow
        placeholder="请选择"
        maxTagCount={type}
        defaultValue={[
          ["cloud", "fe", "sj"],
          ["cloud", "fe", "xk"],
          ["cloud", "be", "rn"],
          ["cloud", "pd", "ll"],
        ]}
        clearIcon={<CloseOutlined />}
        style={{ width: 240 }}
        options={options}
        onChange={(value) => console.log(value)}
      />
    </Space>
  );
};

export default App;
