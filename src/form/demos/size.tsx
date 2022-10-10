import { Button, Form, Input, Radio, Space } from "antd";
import React, { useState } from "react";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type SizeType = Parameters<typeof Form>[0]["size"];

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const [componentSize, setComponentSize] = useState<SizeType>("small");

  const onValuesChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <Space direction="vertical" size={32} style={{ width: "100%" }}>
      <Radio.Group
        value={componentSize}
        onChange={(e) => setComponentSize(e.target.value)}
      >
        <Radio.Button value={undefined}>正常</Radio.Button>
        <Radio.Button value="small">小尺寸</Radio.Button>
      </Radio.Group>

      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        colon={false}
        initialValues={{ layout: formLayout }}
        onValuesChange={onValuesChange}
        size={componentSize}
      >
        <Form.Item label="排列方式" name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Field A" extra="这是备注信息">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B" extra="这是备注信息">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">保存</Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default App;
