import { BulletListSlide } from "./slides/BulletListSlide.jsx";
import { CodeSlide } from "./slides/CodeSlide.jsx";
import { DataTableSlide } from "./slides/DataTableSlide.jsx";
import { FlowDiagramSlide } from "./slides/FlowDiagramSlide.jsx";
import { FormulaSlide } from "./slides/FormulaSlide.jsx";
import { ImageSlide } from "./slides/ImageSlide.jsx";
import { InfoCardSlide } from "./slides/InfoCardSlide.jsx";
import { OverviewSlide } from "./slides/OverviewSlide.jsx";
import { QuoteSlide } from "./slides/QuoteSlide.jsx";
import { deckTitle } from "./deckMeta.js";

export const slides = [
  {
    id: "overview",
    title: deckTitle,
    kind: "cover",
    component: OverviewSlide,
  },
  {
    id: "image-layout",
    title: {
      zh: "图片排版",
      en: "Image Layout",
    },
    kind: "image",
    component: ImageSlide,
  },
  {
    id: "bullet-list",
    title: {
      zh: "项目列表",
      en: "Bullet List",
    },
    kind: "standard",
    component: BulletListSlide,
  },
  {
    id: "info-card",
    title: {
      zh: "信息卡片",
      en: "Info Cards",
    },
    kind: "standard",
    component: InfoCardSlide,
  },
  {
    id: "data-table",
    title: {
      zh: "数据表格",
      en: "Data Table",
    },
    kind: "standard",
    component: DataTableSlide,
  },
  {
    id: "code-block",
    title: {
      zh: "代码块",
      en: "Code Block",
    },
    kind: "standard",
    component: CodeSlide,
  },
  {
    id: "quote-block",
    title: {
      zh: "引用块",
      en: "Quote Block",
    },
    kind: "standard",
    component: QuoteSlide,
  },
  {
    id: "math-formula",
    title: {
      zh: "数学公式",
      en: "Math Formula",
    },
    kind: "standard",
    component: FormulaSlide,
  },
  {
    id: "flow-diagram",
    title: {
      zh: "流程图",
      en: "Flow Diagram",
    },
    kind: "diagram",
    component: FlowDiagramSlide,
  },
];
