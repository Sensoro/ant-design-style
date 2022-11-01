import { Pagination, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Pagination simple defaultCurrent={1} total={500} />
  </ConfigProvider>
);

export default App;
