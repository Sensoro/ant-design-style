import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
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
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      colon={false}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
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
  );
};

export default App;
