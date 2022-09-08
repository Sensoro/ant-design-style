import { Checkbox } from "antd";
import type { CheckboxProps } from "antd/es/checkbox";

import "../index.less";

export default () => {
  return (
    <div>
      <Checkbox disabled checked>
        已选禁用
      </Checkbox>

      <Checkbox disabled>未选禁用</Checkbox>
    </div>
  );
};
