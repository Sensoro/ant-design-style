import type { FC } from "react";
import { TimePicker, ConfigProvider, Space } from "antd";
import type { TimePickerProps } from "antd/es/time-picker";
import moment from "moment";
import { CloseOutlined } from "@ant-design/icons";

import zhCN from "antd/es/locale/zh_CN";

import "../../space/index.less";

const onChange: TimePickerProps["onChange"] = (time, timeString) => {
  console.log(time, timeString);
};

const format = "HH:mm";

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical">
      <Space>
        <TimePicker
          style={{ width: 160 }}
          clearIcon={<CloseOutlined />}
          placeholder="请选择时间"
          defaultValue={moment(new Date(), "HH:mm:ss")}
          onChange={onChange}
        />

        <TimePicker
          clearIcon={<CloseOutlined />}
          defaultValue={moment("12:08", format)}
          format={format}
        />
      </Space>

      <Space>
        <TimePicker
          disabled
          style={{ width: 160 }}
          clearIcon={<CloseOutlined />}
          placeholder="请选择时间"
          defaultValue={moment(new Date(), "HH:mm:ss")}
          onChange={onChange}
        />

        <TimePicker
          disabled
          clearIcon={<CloseOutlined />}
          defaultValue={moment("12:08", format)}
          format={format}
        />
      </Space>
    </Space>
  </ConfigProvider>
);

export default App;
