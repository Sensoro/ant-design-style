# @sensoro-design/styles

## 📦 Install

```bash
npm install @sensoro-design/styles
```

or 
```bash
yarn add @sensoro-design/styles
```

or
```bash
pnpm add @sensoro-design/styles
```

## 🔨 Usage

App.tsx

```tsx
import React from 'react';
import { Button, DatePicker } from 'antd';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
```

App.less

```less
@import '~@sensoro-design/styles/dist/styles.min.css';

// when you use style variables
@import '~@sensoro-design/styles/style/themes/default.less';

color: @primary-color;
padding: @padding-sm;
box-shadow: @sen-shadow-01;
```


