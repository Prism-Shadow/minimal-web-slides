import { SlideTitle } from "../../components/Typography.jsx";
import { deckSpeaker, deckTitle } from "../deckMeta.js";

export function OverviewSlide({ locale }) {
  const speaker = deckSpeaker[locale];
  const hasSpeakerTitle = speaker?.name && speaker?.title;

  return (
    <div className="overview-slide">
      <div className="overview-slide__cover">
        <SlideTitle>{deckTitle[locale]}</SlideTitle>
        {hasSpeakerTitle ? (
          <div className="cover-speaker cover-speaker--split">
            <span className="cover-speaker__name">{speaker.name}</span>
            <span className="cover-speaker__title">{speaker.title}</span>
          </div>
        ) : (
          <p className="cover-speaker">{typeof speaker === 'string' ? speaker : speaker?.name}</p>
        )}
      </div>
    </div>
  );
}
