import { SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "图片排版",
    featuredAlt: "雨后的粉色郁金香",
    sideTopAlt: "布偶猫头像",
    sideBottomAlt: "红黄相间的郁金香",
    captions: ["主图", "竖图", "横图"],
  },
  en: {
    title: "Image Layout",
    featuredAlt: "Pink tulip after rain",
    sideTopAlt: "Ragdoll cat portrait",
    sideBottomAlt: "Red and yellow tulip",
    captions: ["Hero", "Portrait", "Wide"],
  },
};

const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

export function ImageSlide({ locale }) {
  const t = copy[locale];

  return (
    <div className="template-slide image-slide">
      <header className="slide-header">
        <SlideTitle>{t.title}</SlideTitle>
      </header>

      <div className="image-layout">
        <figure className="image-layout__featured">
          <img src={imagePath("tulip-rain.jpg")} alt={t.featuredAlt} />
          <figcaption>{t.captions[0]}</figcaption>
        </figure>
        <div className="image-layout__side">
          <figure>
            <img src={imagePath("ragdoll-cat-face.jpg")} alt={t.sideTopAlt} />
            <figcaption>{t.captions[1]}</figcaption>
          </figure>
          <figure>
            <img src={imagePath("tulip-red-yellow.jpg")} alt={t.sideBottomAlt} />
            <figcaption>{t.captions[2]}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
