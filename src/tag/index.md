---
title: Tag 标签
order: 0
toc: content
group:
  title: 数据展示
  order: 0
nav:
  title: 组件
  path: /components
---

# Tag 标签

## 代码演示

### 基本用法

默认大圆角

<code src="./demos/basic.tsx" />

### 小圆角

Antd 没有支持这类型，所以手动添加类名 `ant-tag-sm` 进行支持

<code src="./demos/size.tsx" />

### 文字过长省略

注意，`closable` 无法配合省略一起使用

<code src="./demos/length.tsx" />

### 可选择标签

<code src="./demos/checkable.tsx" />

### 添加和删除标签

添加和编辑 `Tag` 的 `Input` 组件样式进行了集成，需要手动添加 `className="ant-tag-input"`

<code src="./demos/operate.tsx" />

### 多彩标签

<code src="./demos/colors.tsx" />

### 超出省略

[物料实现地址](https://frontend.sensoro.com/material/components/data-display/tag-list)
