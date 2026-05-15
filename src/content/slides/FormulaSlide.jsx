import {
  MathFormula,
  MathIntegral,
  MathPower,
  MathSummation,
  MathSup,
} from "../../components/Blocks.jsx";
import { SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "数学公式",
    label: "带上标、求和与积分的公式示例",
  },
  en: {
    title: "Math Formula",
    label: "Formula example with superscript, summation, and integral",
  },
};

export function FormulaSlide({ locale }) {
  const t = copy[locale];

  return (
    <div className="template-slide centered-slide formula-demo-slide">
      <header className="slide-header">
        <SlideTitle>{t.title}</SlideTitle>
      </header>
      <div className="formula-demo-stage">
        <MathFormula label={t.label}>
          <span className="math-formula__line">
            mood = <MathPower base="tea" exponent="2" /> + tulips - socks
          </span>
          <span className="math-formula__line">
            total =
            <MathSummation from="i=1" to="n">
              i<MathSup>2</MathSup>
            </MathSummation>
            +
            <MathIntegral from="0" to="1">
              x<MathSup>2</MathSup> dx
            </MathIntegral>
          </span>
        </MathFormula>
      </div>
    </div>
  );
}
