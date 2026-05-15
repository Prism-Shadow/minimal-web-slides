import { FlowDiagram } from "../../components/FlowDiagram.jsx";
import { SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "流程图",
  },
  en: {
    title: "Flow Diagram",
  },
};

export function FlowDiagramSlide({ locale }) {
  return (
    <div className="template-slide centered-slide flow-demo-slide">
      <header className="slide-header">
        <SlideTitle>{copy[locale].title}</SlideTitle>
      </header>
      <div className="flow-demo-stage">
        <FlowDiagram locale={locale} />
      </div>
    </div>
  );
}
