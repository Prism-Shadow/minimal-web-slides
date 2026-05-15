import { CodeBlock } from "../../components/Blocks.jsx";
import { SlideTitle } from "../../components/Typography.jsx";

const code = `// A tiny example for the slide template
const basket = ["tulip", "tea", "notebook"];

function makeTinyPlan(items) {
  return items.map((item, index) => ({
    step: index + 1,
    label: item,
  }));
}

console.table(makeTinyPlan(basket));`;

const copy = {
  zh: {
    title: "代码块",
  },
  en: {
    title: "Code Block",
  },
};

export function CodeSlide({ locale }) {
  return (
    <div className="template-slide centered-slide">
      <header className="slide-header">
        <SlideTitle>{copy[locale].title}</SlideTitle>
      </header>
      <div className="code-demo-stage">
        <CodeBlock code={code} language="JavaScript" />
      </div>
    </div>
  );
}
