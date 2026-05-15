import { QuoteBlock } from "../../components/Blocks.jsx";
import { Highlight, SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "引用块",
    before: "今天的",
    highlight: "重点",
    after: "很简单，把杯子洗干净，然后认真吃一块饼干",
  },
  en: {
    title: "Quote Block",
    quote: "Today is simple: wash the cup, sit by the window, and take the cookie seriously",
  },
};

export function QuoteSlide({ locale }) {
  const t = copy[locale];

  return (
    <div className="template-slide centered-slide quote-demo-slide">
      <header className="slide-header">
        <SlideTitle>{t.title}</SlideTitle>
      </header>
      <div className="quote-demo-stage">
        <QuoteBlock>
          {locale === "zh" ? (
            <>
              {t.before}
              <Highlight>{t.highlight}</Highlight>
              {t.after}
            </>
          ) : (
            t.quote
          )}
        </QuoteBlock>
      </div>
    </div>
  );
}
