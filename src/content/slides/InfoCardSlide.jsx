import { InfoCard } from "../../components/Blocks.jsx";
import { SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "信息卡片",
    cards: [
      {
        title: "早餐计划",
        text: "豆浆放左边，包子放右边，盘子中间留给今天的好心情",
      },
      {
        title: "阳台清单",
        text: "花盆排成一行，小铲子靠墙，水壶放在门口附近",
      },
      {
        title: "周末提醒",
        text: "先洗杯子，再晒毛巾，最后把电影看到片尾字幕",
      },
    ],
  },
  en: {
    title: "Info Cards",
    cards: [
      {
        title: "Breakfast Plan",
        text: "Soy milk on the left, buns on the right, a little room in the middle",
      },
      {
        title: "Balcony List",
        text: "Pots in one row, small shovel by the wall, watering can near the door",
      },
      {
        title: "Weekend Note",
        text: "Wash the cup, hang the towel, watch the movie credits",
      },
    ],
  },
};

export function InfoCardSlide({ locale }) {
  const t = copy[locale];

  return (
    <div className="template-slide centered-slide">
      <header className="slide-header">
        <SlideTitle>{t.title}</SlideTitle>
      </header>
      <div className="card-demo-grid">
        {t.cards.map((card) => (
          <InfoCard title={card.title} key={card.title}>
            <p>{card.text}</p>
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
