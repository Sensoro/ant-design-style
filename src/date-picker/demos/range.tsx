import type { RangePickerProps } from "antd/es/date-picker";
import { DatePicker, Space, ConfigProvider } from "antd";
import type { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";
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

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space>
      <RangePicker
        defaultOpen
        clearIcon={<CloseOutlined />}
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
