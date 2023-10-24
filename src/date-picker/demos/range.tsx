import type { RangePickerProps } from "antd/es/date-picker";
import { DatePicker, Space, ConfigProvider } from "antd";
import type { FC } from "react";
import "../../space/index.less";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";

const { RangePicker } = DatePicker;

const onChange: RangePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < moment().subtract(1, "day").endOf("day");
};

const disabledMonth: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < moment().subtract(1, "month");
};

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical" size={16}>
      <Space>
        日期：
        <RangePicker
          disabledDate={disabledDate}
          separator="~"
          defaultValue={[
            moment(new Date(), "YYYY-MM-DD"),
            moment(moment(new Date()).add("10", "day"), "YYYY-MM-DD"),
          ]}
          onChange={onChange}
        />
        <RangePicker
          disabled
          separator="~"
          defaultValue={[
            moment(moment(new Date()).add("1", "day"), "YYYY-MM-DD"),
            moment(moment(new Date()).add("10", "day"), "YYYY-MM-DD"),
          ]}
          onChange={onChange}
        />
      </Space>
      <Space>
        月份：
        <RangePicker
          // defaultOpen
          disabledDate={disabledMonth}
          picker="month"
          separator="~"
          // defaultValue={[
          //   moment(moment(new Date()).subtract("5", "month"), "YYYY-MM-DD"),
          //   moment(moment(new Date()).add("2", "month"), "YYYY-MM-DD"),
          // ]}
          // onChange={onChange}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
