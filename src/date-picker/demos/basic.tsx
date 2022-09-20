import type { RangePickerProps, DatePickerProps } from "antd/es/date-picker";
import { DatePicker, Space, ConfigProvider } from "antd";
import type { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";
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

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical">
      <Space>
        <DatePicker
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
        <DatePicker
          disabled
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
      <Space>
        <DatePicker
          disabledDate={disabledDate}
          clearIcon={<CloseOutlined />}
          onChange={onChange}
        />

        <DatePicker
          disabled
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
