import { DataTable } from "../../components/Blocks.jsx";
import { SlideTitle } from "../../components/Typography.jsx";

const copy = {
  zh: {
    title: "数据表格",
    headers: ["物品", "颜色", "状态", "备注"],
    rows: [
      ["雨伞", "蓝色", "门口", "不要忘记"],
      ["饼干", "黄色", "抽屉", "下午再吃"],
      ["便签", "白色", "桌面", "写三行字"],
      ["水杯", "透明", "窗边", "已经洗好"],
    ],
  },
  en: {
    title: "Data Table",
    headers: ["Item", "Color", "Place", "Note"],
    rows: [
      ["Umbrella", "Blue", "Door", "Take it along"],
      ["Cookies", "Yellow", "Drawer", "Eat later"],
      ["Sticky note", "White", "Desk", "Write three lines"],
      ["Cup", "Clear", "Window", "Already washed"],
    ],
  },
};

export function DataTableSlide({ locale }) {
  const t = copy[locale];

  return (
    <div className="template-slide centered-slide">
      <header className="slide-header">
        <SlideTitle>{t.title}</SlideTitle>
      </header>
      <div className="table-demo-stage">
        <DataTable headers={t.headers} rows={t.rows} />
      </div>
    </div>
  );
}
