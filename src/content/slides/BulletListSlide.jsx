import { BulletList } from "../../components/Blocks.jsx";
import { SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "项目列表",
    items: [
      {
        title: "买一束花",
        text: "周六下午放在餐桌中间",
      },
      {
        title: "泡一杯茶",
        text: "等水开的时候看看窗外",
      },
      {
        title: "整理书桌",
        text: "把多余的纸放进抽屉",
      },
      {
        title: "早点出门",
        text: "路过面包店时顺手带一个纸袋",
      },
    ],
  },
  en: {
    title: "Bullet List",
    items: [
      {
        title: "Buy flowers",
        text: "Put them in the middle of the table on Saturday",
      },
      {
        title: "Make tea",
        text: "Look outside while the water gets warm",
      },
      {
        title: "Clear the desk",
        text: "Move loose paper into the drawer",
      },
      {
        title: "Leave early",
        text: "Pick up a paper bag near the bakery",
      },
    ],
  },
};

export function BulletListSlide({ locale }) {
  const t = copy[locale];

  return (
    <div className="template-slide centered-slide bullet-demo-slide">
      <header className="slide-header">
        <SlideTitle>{t.title}</SlideTitle>
      </header>
      <div className="component-stage component-stage--narrow">
        <BulletList items={t.items} />
      </div>
    </div>
  );
}
