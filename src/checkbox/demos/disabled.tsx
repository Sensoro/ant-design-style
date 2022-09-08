import { Checkbox } from "antd";

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
