import { Radio } from "antd";
import type { RadioProps } from "antd/es/radio";
import { useState } from "react";
const options = [
  {
    label: "海哥",
    value: "Apple",
  },
  {
    label: "婧姐",
    value: "Pear",
  },
  {
    label: "小张",
    value: "Orange",
  },
];
const optionsWithDisabled = options.map((item) => ({
  ...item,
  disabled: item.value === "Orange",
}));

const App = () => {
  const [value1, setValue1] = useState("Apple");
  const [value2, setValue2] = useState("Apple");
  const [value3, setValue3] = useState("Apple");

  const onChange1: RadioProps["onChange"] = ({ target: { value } }) => {
    setValue1(value);
  };

  const onChange2: RadioProps["onChange"] = ({ target: { value } }) => {
    setValue2(value);
  };

  const onChange3: RadioProps["onChange"] = ({ target: { value } }) => {
    setValue3(value);
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange1}
        value={value1}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange2}
        value={value2}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group options={optionsWithDisabled} optionType="button" />
      <br />
      <br />
      <Radio.Group
        disabled
        defaultValue="Apple"
        options={optionsWithDisabled}
        optionType="button"
      />
    </>
  );
};

export default App;
