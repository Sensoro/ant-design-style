import { Radio } from "antd";

const App = () => (
  <>
    <Radio disabled checked>
      已选禁用
    </Radio>
    <Radio disabled checked={false}>
      未选禁用
    </Radio>
  </>
);

export default App;
