import { Pagination, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Pagination
      size="small"
      showQuickJumper
      total={185}
      showTotal={(total) => `共 ${total} 条`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </ConfigProvider>
);

export default App;
