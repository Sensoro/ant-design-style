import type { RangePickerProps, DatePickerProps } from "antd/es/date-picker";
import { DatePicker, Space, ConfigProvider } from "antd";
import type { FC } from "react";
import "../../space/index.less";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < moment().subtract(1, "day").endOf("day");
};

const disabledMonth: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < moment().subtract(3, "month");
};

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical" size={32}>
      <Space>
        基础使用
        <DatePicker
          style={{ width: 240 }}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
        <DatePicker
          style={{ width: 240 }}
          disabled
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
      <Space>
        带不可选
        <DatePicker
          style={{ width: 240 }}
          disabledDate={disabledDate}
          onChange={onChange}
        />
      </Space>
      <Space>
        月份选择
        <DatePicker
          style={{ width: 240 }}
          defaultValue={moment("2022-02")}
          disabledDate={disabledMonth}
          picker="month"
          onChange={onChange}
        />
      </Space>
      <Space>
        按周选择
        <DatePicker style={{ width: 240 }} picker="week" onChange={onChange} />
      </Space>

      <Space>
        走查专用
        <DatePicker
          defaultOpen
          style={{ width: 240 }}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
