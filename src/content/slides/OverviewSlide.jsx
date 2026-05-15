import { SlideTitle } from "../../components/Typography.jsx";
import { deckTitle } from "../deckMeta.js";

const copy = {
  zh: {
    title: deckTitle.zh,
    speakerName: "React Web Slides 模板",
    speakerTitle: "预览 · 主题 · 双语 · PDF",
  },
  en: {
    title: deckTitle.en,
    speakerName: "React Web Slides Template",
    speakerTitle: "Preview · themes · bilingual · PDF",
  },
};

export function OverviewSlide({ locale }) {
  const t = copy[locale];
  const hasSpeakerTitle = t.speakerName && t.speakerTitle;

  return (
    <div className="overview-slide">
      <div className="overview-slide__cover">
        <SlideTitle>{t.title}</SlideTitle>
        {hasSpeakerTitle ? (
          <div className="cover-speaker cover-speaker--split">
            <span className="cover-speaker__name">{t.speakerName}</span>
            <span className="cover-speaker__title">{t.speakerTitle}</span>
          </div>
        ) : (
          <p className="cover-speaker">{t.speaker}</p>
        )}
      </div>
    </div>
  );
}
