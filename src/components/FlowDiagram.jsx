const copy = {
  zh: {
    label: "带分支的普通一天流程图",
    nodes: {
      start: {
        eyebrow: "01",
        title: "开窗",
        body: "看一眼天气",
      },
      decision: {
        eyebrow: "02",
        title: "选择路线",
        body: "看看还有多少时间",
      },
      flowers: {
        eyebrow: "03A",
        title: "买花",
        body: "挑一束郁金香",
      },
      tea: {
        eyebrow: "03B",
        title: "泡茶",
        body: "等三分钟",
      },
      note: {
        eyebrow: "04",
        title: "写便签",
        body: "贴在冰箱上",
      },
      finish: {
        eyebrow: "05",
        title: "关灯",
        body: "准备出门",
      },
    },
    branchLabels: {
      enough: "时间充足",
      quick: "赶时间",
    },
    mergeLabel: "汇合",
  },
  en: {
    label: "Branched ordinary day flow diagram",
    nodes: {
      start: {
        eyebrow: "01",
        title: "Open Window",
        body: "Check the weather",
      },
      decision: {
        eyebrow: "02",
        title: "Choose Route",
        body: "Check how much time remains",
      },
      flowers: {
        eyebrow: "03A",
        title: "Buy Flowers",
        body: "Pick tulips",
      },
      tea: {
        eyebrow: "03B",
        title: "Make Tea",
        body: "Wait three minutes",
      },
      note: {
        eyebrow: "04",
        title: "Write Note",
        body: "Put it on the fridge",
      },
      finish: {
        eyebrow: "05",
        title: "Turn Off Light",
        body: "Leave the room",
      },
    },
    branchLabels: {
      enough: "Enough time",
      quick: "In a hurry",
    },
    mergeLabel: "Merge",
  },
};

function FlowNode({ step, variant }) {
  return (
    <div className={`flow-node flow-node--${variant}`}>
      <span>{step.eyebrow}</span>
      <strong>{step.title}</strong>
      <p>{step.body}</p>
    </div>
  );
}

export function FlowDiagram({ locale }) {
  const t = copy[locale];

  return (
    <figure className="flow-diagram" aria-label={t.label}>
      <svg className="flow-lines" viewBox="0 0 1320 500" aria-hidden="true">
        <defs>
          <marker
            id="flow-arrow"
            viewBox="0 0 14 14"
            refX="12"
            refY="7"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 2 1.6 L 12 7 L 2 12.4" />
          </marker>
        </defs>
        <path d="M 225 250 L 320 250" />
        <path d="M 500 222 C 550 164, 548 130, 600 130" />
        <path d="M 500 278 C 550 336, 548 370, 600 370" />
        <path d="M 760 130 C 820 130, 806 250, 860 250" />
        <path d="M 760 370 C 820 370, 806 250, 860 250" />
        <path d="M 1025 250 L 1120 250" />
      </svg>

      <FlowNode step={t.nodes.start} variant="start" />
      <FlowNode step={t.nodes.decision} variant="decision" />
      <FlowNode step={t.nodes.flowers} variant="flowers" />
      <FlowNode step={t.nodes.tea} variant="tea" />
      <FlowNode step={t.nodes.note} variant="note" />
      <FlowNode step={t.nodes.finish} variant="finish" />

      <div className="flow-branch-label flow-branch-label--enough">{t.branchLabels.enough}</div>
      <div className="flow-branch-label flow-branch-label--quick">{t.branchLabels.quick}</div>
      <div className="flow-feedback-label">{t.mergeLabel}</div>
    </figure>
  );
}
