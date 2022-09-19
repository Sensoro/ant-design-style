import type { FC } from "react";
import { TimePicker, ConfigProvider, Space } from "antd";
import type {
  TimePickerProps,
  TimeRangePickerProps,
} from "antd/es/time-picker";
import moment from "moment";
import { CloseOutlined } from "@ant-design/icons";

const { RangePicker } = TimePicker;

import zhCN from "antd/es/locale/zh_CN";

import "../../space/index.less";

const onChange: TimeRangePickerProps["onChange"] = (time, timeString) => {
  console.log(time, timeString);
};

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical">
      <RangePicker
        separator="~"
        size="large"
        clearIcon={<CloseOutlined />}
        defaultValue={[
          moment(moment(new Date()).subtract("10", "day"), "YYYY-MM-DD"),
          moment(moment(new Date()).subtract("1", "day"), "YYYY-MM-DD"),
        ]}
        onChange={onChange}
      />

      <RangePicker
        separator="~"
        clearIcon={<CloseOutlined />}
        defaultValue={[
          moment(moment(new Date()).add("1", "day"), "YYYY-MM-DD"),
          moment(moment(new Date()).add("10", "day"), "YYYY-MM-DD"),
        ]}
        onChange={onChange}
      />

      <RangePicker
        size="small"
        separator="~"
        clearIcon={<CloseOutlined />}
        defaultValue={[
          moment(moment(new Date()).add("1", "day"), "YYYY-MM-DD"),
          moment(moment(new Date()).add("10", "day"), "YYYY-MM-DD"),
        ]}
        onChange={onChange}
      />
    </Space>
  </ConfigProvider>
);

export default App;
