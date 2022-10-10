import type { RangePickerProps, DatePickerProps } from "antd/es/date-picker";
import { DatePicker, Space, ConfigProvider } from "antd";
import type { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";
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

export const datePickerIconProps = {
  nextIcon: <RightOutlined />,
  prevIcon: <LeftOutlined />,
  superNextIcon: <DoubleRightOutlined />,
  superPrevIcon: <DoubleLeftOutlined />,
};

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical">
      <Space>
        <DatePicker
          {...datePickerIconProps}
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
        <DatePicker
          disabled
          {...datePickerIconProps}
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
      <Space>
        <DatePicker
          {...datePickerIconProps}
          disabledDate={disabledDate}
          clearIcon={<CloseOutlined />}
          onChange={onChange}
        />

        <DatePicker
          disabled
          {...datePickerIconProps}
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>

      <Space>
        走查专用
        <DatePicker
          defaultOpen
          {...datePickerIconProps}
          clearIcon={<CloseOutlined />}
          defaultValue={moment(new Date(), "YYYY-MM-DD")}
          onChange={onChange}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
