# Minimal Web Slides

English | [简体中文](README_ZH.md)

![Minimal Web Slides](https://github.com/user-attachments/assets/0faa2255-d5ed-49c7-af58-46fcd82cbf50)

Minimal Web Slides is a React + Vite web presentation template. It is designed as a minimal React web slides framework for creating and editing presentations with Claude Code and Codex. It uses a fixed `1920 × 1080` design canvas and scales the entire slide through the outer Viewer, so titles, body text, images, tables, code blocks, flow diagrams, page numbers, and the bottom identity line resize together with the browser window.

## Preview

![Minimal Web Slides preview](https://github.com/user-attachments/assets/e500e1c7-b56f-438a-a16d-2a0f187f95fd)

![Minimal Web Slides preview](https://github.com/user-attachments/assets/6c41ae5f-aa0c-4247-a40d-c2f7cf321176)

## Features

- Componentized slides: cover, images, lists, cards, tables, code, formulas, and flow diagrams
- Real-time Light / Dark theme and Chinese / English switching
- PDF export and fullscreen presentation support

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite. It is usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  App.jsx
  main.jsx
  presentation/
    constants.js       # Fixed 16:9 canvas size
    SlideFrame.jsx     # Slide shell, geometric mark, page number, and bottom green line
    SlideViewer.jsx    # Computes responsive scale from the browser viewport
    ExportDeck.jsx     # Renders the full slide list for PDF export
    exportPdf.js       # Converts slides to JPG and combines them into a PDF
    Toolbar.jsx        # Theme, language, navigation, fullscreen, and export controls
  content/
    deckMeta.js        # Deck title, speaker metadata, and exported filename stem
    slides.jsx         # Slide registry
    slides/            # Individual slide content components
  components/
    Blocks.jsx         # List, card, table, highlighted code, quote, and formula components
    FlowDiagram.jsx    # Example flow diagram component
    Typography.jsx     # Slide title and highlighted text components
  styles/
    global.css
public/
  images/              # Local image assets
```

## Add a Slide

1. Create a new React component in `src/content/slides/`, such as `ChecklistSlide.jsx`
2. Register it in `src/content/slides.jsx`:

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

Every slide is a regular React component and can define its own layout. The framework handles canvas size, scaling, page numbers, theme state, and export.

## Edit Deck Metadata

Deck-level metadata lives in `src/content/deckMeta.js`. Update it when you need to change the deck title, cover speaker information, or exported PDF filename:

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

The cover slide reads its title and speaker fields from this metadata, while PDF export uses `filenameStem`.

## Edit Bilingual Copy

Page-specific slide copy is stored in a `copy` object near the top of each slide file:

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

Slide components receive a `locale` prop:

```jsx
export function ChecklistSlide({ locale }) {
  const t = copy[locale];
  return <h1>{t.title}</h1>;
}
```

When the toolbar language toggle changes between `中文 / English`, the current slide re-renders immediately.

## Insert Images, Tables, or Diagrams

Put images in `public/images/`, then reference them from the root path:

```jsx
<img src="/images/example.jpg" alt="Example" />
```

Tables can reuse `DataTable`:

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

Code blocks can reuse `CodeBlock`:

```jsx
import { CodeBlock } from "../../components/Blocks.jsx";

<CodeBlock
  language="JavaScript"
  code={`const message = "hello slides";`}
/>;
```

Formulas can compose superscripts, summations, and integrals:

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

For more complex diagrams, prefer React components and CSS. The current example lives in `src/components/FlowDiagram.jsx`; it uses absolutely positioned nodes and lightweight SVG connector lines, and can be adapted into flow diagrams, system diagrams, layered diagrams, or comparison diagrams.

## Theme Styling

Theme variables live at the top of `src/styles/global.css`:

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

Changing these CSS variables updates the Light / Dark visual system globally.

## Export PDF

Click `Export PDF` in the toolbar to generate the full deck as a PDF using the current language and theme.

The export flow does not use browser printing. `src/presentation/ExportDeck.jsx` renders the full slide list offscreen, and `src/presentation/exportPdf.js` uses `html2canvas` to clone each `1920 × 1080` slide into a temporary render stage before combining the captured images with `jspdf`.

## Example Image Sources

The sample images are from Wikimedia Commons and are marked CC0 / Public Domain:

- `public/images/tulip-rain.jpg`: [Tulip closeup in the rain](https://commons.wikimedia.org/wiki/File:Tulip_closeup_in_the_rain.jpg)
- `public/images/ragdoll-cat-face.jpg`: [Ragdoll Cat Face](https://commons.wikimedia.org/wiki/File:Ragdoll_Cat_Face.jpg)
- `public/images/tulip-red-yellow.jpg`: [Close up of red-yellow tulip in bloom](https://commons.wikimedia.org/wiki/File:Close_up_of_red-yellow_tulip_in_bloom.jpg)
