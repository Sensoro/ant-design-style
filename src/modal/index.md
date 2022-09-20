---
title: Modal 对话框
order: 0
toc: content
group:
  title: 反馈
  order: 0
nav:
  title: 组件
  path: /components
---

# Modal 对话框

## 代码演示

### 基本用法

<code src="./demos/basic.tsx" />

### 适配规则

* `Modal` 最大高度 `100vh - 80px`
* 内容区域最大高度 = `Modal - @modal-header-height - @modal-footer-height` === `calc(100vh - 76px -80px - 80px)`

<code src="./demos/max-height.tsx" />

### 对话框

<code src="./demos/confirm.tsx" />

