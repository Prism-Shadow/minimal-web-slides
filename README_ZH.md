# Minimal Web Slides

[English](README.md) | 简体中文

![Minimal Web Slides](https://github.com/user-attachments/assets/0faa2255-d5ed-49c7-af58-46fcd82cbf50)

Minimal Web Slides 是一套基于 React + Vite 的网页演示模板。这个框架是为了通过 Claude Code 和 Codex 创建与编辑演示文稿而设计的。它使用固定 `1920 × 1080` 设计画布，通过外层 Viewer 对整张 Slide 做等比例缩放，因此标题、正文、图片、表格、代码块、流程图、页码和底部识别线都会随浏览器窗口一起缩放。

## 预览

在线预览效果：[https://prism-shadow.github.io/minimal-web-slides/](https://prism-shadow.github.io/minimal-web-slides/)

![Minimal Web Slides 预览](https://github.com/user-attachments/assets/e500e1c7-b56f-438a-a16d-2a0f187f95fd)

![Minimal Web Slides 预览](https://github.com/user-attachments/assets/6c41ae5f-aa0c-4247-a40d-c2f7cf321176)

## 功能特性

- 组件化的 slides：封面、图片、列表、卡片、表格、代码、公式和流程图
- 实时切换亮暗主题和中英文
- 支持导出 PDF 和全屏播放

## 安装依赖

```bash
npm install
```

## 本地启动

```bash
npm run dev
```

启动后打开终端中显示的本地地址，通常是：

```text
http://localhost:5173
```

## 构建

```bash
npm run build
```

## 项目结构

```text
src/
  App.jsx
  main.jsx
  presentation/
    constants.js       # 固定 16:9 画布尺寸
    SlideFrame.jsx     # 单页幻灯片外壳、几何装饰、页码和底部绿色横线
    SlideViewer.jsx    # 根据浏览器窗口计算缩放比例
    ExportDeck.jsx     # PDF 导出时渲染完整幻灯片列表
    exportPdf.js       # 将页面转 JPG 并合成 PDF
    Toolbar.jsx        # 主题、语言、翻页、全屏和导出控制
  content/
    deckMeta.js        # 演示标题、讲者信息和导出文件名
    slides.jsx         # 幻灯片注册表
    slides/            # 单页内容组件
  components/
    Blocks.jsx         # 列表、卡片、表格、高亮代码、引用和公式组件
    FlowDiagram.jsx    # 示例流程图组件
    Typography.jsx     # 页面标题和高亮文本组件
  styles/
    global.css
public/
  images/              # 本地图片资源
```

## 新增幻灯片

1. 在 `src/content/slides/` 中创建新的 React 组件，例如 `ChecklistSlide.jsx`
2. 在 `src/content/slides.jsx` 中注册：

```jsx
import { ChecklistSlide } from "./slides/ChecklistSlide.jsx";

export const slides = [
  // ...
  {
    id: "checklist",
    title: {
      zh: "清单页",
      en: "Checklist",
    },
    kind: "standard",
    component: ChecklistSlide,
  },
];
```

每一页都是普通 React 组件，可以完全自定义布局。框架会自动处理画布、缩放、页码、主题和导出。

## 修改演示元信息

演示级别的元信息集中在 `src/content/deckMeta.js`。需要修改演示标题、封面讲者信息或导出 PDF 文件名时，优先修改这里：

```js
export const deckMeta = {
  title: {
    zh: "Minimal Web Slides",
    en: "Minimal Web Slides",
  },
  speaker: {
    zh: {
      name: "React Web Slides 模板",
      title: "预览 · 主题 · 双语 · PDF",
    },
    en: {
      name: "React Web Slides Template",
      title: "Preview · themes · bilingual · PDF",
    },
  },
  filenameStem: "minimal-web-slides",
};
```

封面页会从这里读取标题和讲者字段，PDF 导出会使用 `filenameStem`。

## 修改中英文内容

页面自己的中英文文案放在各自文件顶部的 `copy` 对象中：

```jsx
const copy = {
  zh: {
    title: "项目列表",
  },
  en: {
    title: "Bullet List",
  },
};
```

组件会接收 `locale` 参数：

```jsx
export function ChecklistSlide({ locale }) {
  const t = copy[locale];
  return <h1>{t.title}</h1>;
}
```

点击顶部 `中文 / English` 按钮后，当前幻灯片会立即重新渲染。

## 插入图片、表格或流程图

图片建议放在 `public/images/` 中，然后用根路径引用：

```jsx
<img src="/images/example.jpg" alt="Example" />
```

表格可以复用 `DataTable`：

```jsx
import { DataTable } from "../../components/Blocks.jsx";

<DataTable
  headers={["Item", "Color", "Place"]}
  rows={[
    ["Umbrella", "Blue", "Door"],
    ["Cup", "Clear", "Window"],
  ]}
/>;
```

代码块可以复用 `CodeBlock`：

```jsx
import { CodeBlock } from "../../components/Blocks.jsx";

<CodeBlock
  language="JavaScript"
  code={`const message = "hello slides";`}
/>;
```

公式可以组合上标、求和与积分：

```jsx
import {
  MathFormula,
  MathIntegral,
  MathSummation,
  MathSup,
} from "../../components/Blocks.jsx";

<MathFormula>
  total =
  <MathSummation from="i=1" to="n">
    i<MathSup>2</MathSup>
  </MathSummation>
  +
  <MathIntegral from="0" to="1">
    x<MathSup>2</MathSup> dx
  </MathIntegral>
</MathFormula>;
```

复杂框图建议优先使用 React 组件和 CSS 实现。当前示例位于 `src/components/FlowDiagram.jsx`，它使用绝对定位的模块节点和轻量 SVG 连接线，可以改造成流程图、系统图、分层图或对比图。

## 修改主题样式

主题变量集中在 `src/styles/global.css` 顶部：

```css
:root {
  --accent: #1fa464;
  --canvas-bg: #ffffff;
  --text: #1a1f1d;
}

:root[data-theme="dark"] {
  --accent: #49c684;
  --canvas-bg: #171a18;
  --text: #eff4ef;
}
```

修改这些 CSS 变量即可统一调整亮色 / 暗色主题。

## 导出 PDF

点击顶部 `Export PDF` 按钮会生成当前语言、当前主题下的整套幻灯片 PDF。

导出流程不依赖浏览器打印。`src/presentation/ExportDeck.jsx` 会在屏幕外渲染完整幻灯片列表，`src/presentation/exportPdf.js` 会使用 `html2canvas` 将每页 `1920 × 1080` 画布克隆到临时渲染舞台，再用 `jspdf` 合成为 PDF。

## 示例图片来源

示例图片来自 Wikimedia Commons，均标注为 CC0 / Public Domain：

- `public/images/tulip-rain.jpg`: [Tulip closeup in the rain](https://commons.wikimedia.org/wiki/File:Tulip_closeup_in_the_rain.jpg)
- `public/images/ragdoll-cat-face.jpg`: [Ragdoll Cat Face](https://commons.wikimedia.org/wiki/File:Ragdoll_Cat_Face.jpg)
- `public/images/tulip-red-yellow.jpg`: [Close up of red-yellow tulip in bloom](https://commons.wikimedia.org/wiki/File:Close_up_of_red-yellow_tulip_in_bloom.jpg)
