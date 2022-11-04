import type { RangePickerProps, DatePickerProps } from "antd/es/date-picker";
import { DatePicker, Space, ConfigProvider } from "antd";
import type { FC } from "react";
import "../../space/index.less";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import RightOutlined from "@sensoro-design/icons/RightOutlined";
import LeftOutlined from "@sensoro-design/icons/LeftOutlined";
import DoubleRightOutlined from "@sensoro-design/icons/DoubleRightOutlined";
import DoubleLeftOutlined from "@sensoro-design/icons/DoubleLeftOutlined";

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
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
        <DatePicker
          disabled
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
      <Space>
        <DatePicker disabledDate={disabledDate} onChange={onChange} />

        <DatePicker
          disabled
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>

      <Space>
        走查专用
        <DatePicker
          defaultOpen
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
