import type { FC } from "react";
import { TimePicker, ConfigProvider, Space } from "antd";
import type { TimeRangePickerProps } from "antd/es/time-picker";
import moment from "moment";

const { RangePicker } = TimePicker;

import zhCN from "antd/es/locale/zh_CN";

import "../../space/index.less";

const onChange: TimeRangePickerProps["onChange"] = (time, timeString) => {
  console.log(time, timeString);
};

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical">
      <Space size={16}>
        <TimePicker
          size="large"
          style={{ width: 160 }}
          placeholder="请选择时间"
          defaultValue={moment(new Date(), "HH:mm:ss")}
        />

        <RangePicker
          separator="~"
          size="large"
          onChange={onChange}
          defaultValue={[
            moment(moment(new Date()).subtract(10, "minute"), "HH:mm:ss"),
            moment(new Date(), "HH:mm:ss"),
          ]}
        />
      </Space>
      <Space size={16}>
        <TimePicker
          style={{ width: 160 }}
          placeholder="请选择时间"
          defaultValue={moment(new Date(), "HH:mm:ss")}
        />

        <RangePicker
          separator="~"
          onChange={onChange}
          defaultValue={[
            moment(moment(new Date()).subtract(10, "minute"), "HH:mm:ss"),
            moment(new Date(), "HH:mm:ss"),
          ]}
        />
      </Space>
      <Space size={16}>
        <TimePicker
          size="small"
          style={{ width: 160 }}
          placeholder="请选择时间"
          defaultValue={moment(new Date(), "HH:mm:ss")}
        />

        <RangePicker
          size="small"
          separator="~"
          onChange={onChange}
          defaultValue={[
            moment(moment(new Date()).subtract(10, "minute"), "HH:mm:ss"),
            moment(new Date(), "HH:mm:ss"),
          ]}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
