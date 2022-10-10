import { Descriptions, Space } from "antd";
import LocationOutlined from "@sensoro-design/icons/LocationOutlined";

export default () => (
  <Space size={32}>
    <Descriptions title="基本信息" size="middle" column={1} colon={false}>
      <Descriptions.Item label="UserName">张福浩</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">北京</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label={<LocationOutlined style={{ marginTop: 4 }} />}>
        利星行D座
      </Descriptions.Item>
    </Descriptions>

    <Descriptions title="基本信息" size="middle" column={1} colon={false}>
      <Descriptions.Item label="UserName" labelStyle={{ width: 84 }}>
        张福浩
      </Descriptions.Item>
      <Descriptions.Item labelStyle={{ width: 84 }} label="Telephone">
        184800000
      </Descriptions.Item>
      <Descriptions.Item labelStyle={{ width: 84 }} label="Live">
        北京
      </Descriptions.Item>
      <Descriptions.Item labelStyle={{ width: 84 }} label="Remark">
        empty
      </Descriptions.Item>
      <Descriptions.Item
        labelStyle={{ width: 84 }}
        label={<LocationOutlined style={{ marginTop: 4 }} />}
      >
        利星行D座
      </Descriptions.Item>
    </Descriptions>
  </Space>
);
