const CODE_KEYWORDS = new Set([
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "default",
  "do",
  "else",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "from",
  "function",
  "if",
  "import",
  "in",
  "let",
  "new",
  "null",
  "of",
  "return",
  "switch",
  "throw",
  "true",
  "try",
  "undefined",
  "var",
  "while",
]);

const CODE_TOKEN_PATTERN =
  /\/\/.*|\/\*.*?\*\/|`(?:\\[\s\S]|[^`\\])*`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b|[{}[\]().,;:+\-*/%=<>!&|?]+/g;

const getCodeTokenType = (token, line, start, end) => {
  if (token.startsWith("//") || token.startsWith("/*")) return "comment";
  if (token.startsWith("\"") || token.startsWith("'") || token.startsWith("`")) return "string";
  if (/^\d/.test(token)) return "number";

  if (/^[A-Za-z_$][\w$]*$/.test(token)) {
    if (CODE_KEYWORDS.has(token)) return "keyword";
    if (/^\s*\(/.test(line.slice(end))) return "function";
    if (/^\s*:/.test(line.slice(end))) return "property";
    if (/\.\s*$/.test(line.slice(0, start))) return "property";
    return "plain";
  }

  return "operator";
};

const highlightCodeLine = (line) => {
  const pieces = [];
  let cursor = 0;
  let match;

  CODE_TOKEN_PATTERN.lastIndex = 0;

  while ((match = CODE_TOKEN_PATTERN.exec(line)) !== null) {
    const token = match[0];
    const start = match.index;
    const end = start + token.length;

    if (start > cursor) {
      pieces.push({
        text: line.slice(cursor, start),
        type: "plain",
      });
    }

    pieces.push({
      text: token,
      type: getCodeTokenType(token, line, start, end),
    });

    cursor = end;
  }

  if (cursor < line.length) {
    pieces.push({
      text: line.slice(cursor),
      type: "plain",
    });
  }

  return pieces;
};

export function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({ title, children }) {
  return (
    <section className="info-card">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.join("-")}>
            {row.map((cell, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CodeBlock({ code, language = "JavaScript" }) {
  const lines = code.trimEnd().split("\n");

  return (
    <figure className="code-block" aria-label={`${language} code example`}>
      <figcaption className="code-block__header">
        <span className="code-block__dot code-block__dot--rose" />
        <span className="code-block__dot code-block__dot--gold" />
        <span className="code-block__dot code-block__dot--green" />
        <span className="code-block__language">{language}</span>
      </figcaption>
      <pre className="code-block__body">
        {lines.map((line, lineIndex) => (
          <span className="code-line" key={`${lineIndex}-${line}`}>
            <span className="code-line__number">{String(lineIndex + 1).padStart(2, "0")}</span>
            <code className="code-line__content">
              {highlightCodeLine(line).map((piece, pieceIndex) => (
                <span
                  className={`code-token code-token--${piece.type}`}
                  key={`${lineIndex}-${pieceIndex}-${piece.text}`}
                >
                  {piece.text}
                </span>
              ))}
            </code>
          </span>
        ))}
      </pre>
    </figure>
  );
}

export function QuoteBlock({ children }) {
  return <blockquote className="quote-block">{children}</blockquote>;
}

export function MathFormula({ children, label = "Mathematical formula" }) {
  return (
    <div className="math-formula" aria-label={label} role="math">
      {children}
    </div>
  );
}

export function MathSup({ children }) {
  return <sup className="math-sup">{children}</sup>;
}

export function MathSub({ children }) {
  return <sub className="math-sub">{children}</sub>;
}

export function MathPower({ base, exponent }) {
  return (
    <span className="math-power">
      <span>{base}</span>
      <MathSup>{exponent}</MathSup>
    </span>
  );
}

export function MathSummation({ from, to, children }) {
  return (
    <span className="math-expression math-summation">
      <span className="math-limit-stack" aria-hidden="true">
        <span className="math-limit math-limit--top">{to}</span>
        <span className="math-symbol math-symbol--sum">∑</span>
        <span className="math-limit math-limit--bottom">{from}</span>
      </span>
      <span className="math-expression__body">{children}</span>
    </span>
  );
}

export function MathIntegral({ from, to, children }) {
  return (
    <span className="math-expression math-integral">
      <span className="math-integral__mark" aria-hidden="true">
        <span className="math-symbol math-symbol--integral">∫</span>
        <span className="math-integral__limits">
          <span className="math-limit math-limit--integral-top">{to}</span>
          <span className="math-limit math-limit--integral-bottom">{from}</span>
        </span>
      </span>
      <span className="math-expression__body">{children}</span>
    </span>
  );
}
