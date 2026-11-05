# node

v22+

# Eslint

npm install -D eslint @eslint/js typescript typescript-eslint eslint-plugin-vue

# 项目结构

src/
├── api/ # 接口请求
├── assets/ # 静态资源
├── components/ # 公共组件
├── hooks/ # 组合式函数
├── layouts/ # 布局组件
├── pages/ # 页面组件
├── router/ # 路由配置
├── services/ # axios服务层
├── stores/ # Pinia 状态管理
│ ├── global.ts # 全局状态管理
│ ├── auth.ts # 用户状态管理
│ ├── type.ts # 类型定义映射
│ ├── index.ts # 导出所有 store 定义函数
├── styles/ # 全局样式
├── types/ # TS 类型
├── utils/ # 工具函数
├── App.vue # 入口组件
└── main.ts # 入口文件

# 安装 Node 类型：

npm install -D @types/node

# Vue Router

npm install vue-router@latest

# Pinia

npm install pinia@latest
npm i pinia-plugin-persistedstate 安装持久化插件

::: tip

1. 新建 store 定义函数时，需要在 type.ts 中添加对应的 store 定义映射
   :::

# 安装 scss

npm install -D sass

# 安装滚动条

npm install vue3-perfect-scrollbar

# 安装UI框架 NaiveUI

npm install naive-ui

# 安装 ionicons5 图标

npm i -D @vicons/ionicons5

# 安装 SVG Sprite，用于 SVG 图标

npm i vite-plugin-svg-icons -D

# 配置自动引入

npm install -D unplugin-auto-import
npm install -D @unplugin-vue-components

# 安装 axios 封装为装饰器请求函数

npm install axios
npm install reflect-metadata 用于装饰器元数据



 1. 页面按 1920×1080 设计基准开发，内部全部使用 px 
 2. 安装布局进行页面组件拆分，放在modules, 
 3. 颜色、字号、间距尽量从设计图中提取 
 4. 第一轮生成布局骨架 
 5. 第二轮生成各模块页面
 6. 所有切图放在assets/images/visualization/cps/目录下，相同的图片不在重复添加。
 7. 可以用css 实现的线条不在使用切图，直接用css 实现。
 8. 大屏中的数据循环样式尽量多使用flex布局，间距尽量用flex布局属性实现，而不是用margin。
 9. img标签的alt属性建议添加，用于描述图片的内容。