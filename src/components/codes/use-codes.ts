import { useGridConfig } from '@/providers/grid-provider';

export const useCodes = () => {
  const { state: gridState } = useGridConfig();
  const { cols, rows, gap, layout } = gridState;

  const generateHtmlCode = (): string => {
    const gridItemsHtml = layout
      .map((item) => {
        return `  <div class="div${item.i}">
    ${item.i}
  </div>`;
      })
      .join('\n');

    return `<div class="parent">
${gridItemsHtml}
</div>`;
  };

  const generateCssCode = (): string => {
    const containerCss = `.parent {
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  gap: ${gap}px;
}`;

    const gridItemsCss = layout
      .map((item) => {
        return `.div${item.i} {
  grid-column: ${item.x + 1} / span ${item.w};
  grid-row: ${item.y + 1} / span ${item.h};
}`;
      })
      .join('\n\n');

    return `${containerCss}

${gridItemsCss}`;
  };

  // Generate JSX code with React and CSS Grid
  const generateJsxCode = (): string => {
    const gridItemsJsx = layout
      .map((item) => {
        return `      <div
        className="grid-item"
        style={{
          gridColumn: '${item.x + 1} / span ${item.w}',
          gridRow: '${item.y + 1} / span ${item.h}',
        }}
      >
        {${item.i}}
      </div>`;
      })
      .join('\n');

    return `import React from 'react';

export const GridLayout: React.FC = () => {
  return (
    <div 
      className="grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(${cols}, 1fr)',
        gridTemplateRows: 'repeat(${rows}, 1fr)',
        gap: '${gap}px',
      }}
    >
${gridItemsJsx}
    </div>
  );
};`;
  };

  const generateTailwindCode = (): string => {
    const gridItemsTailwind = layout
      .map((item) => {
        return `<div class="col-start-${item.x + 1} col-span-${
          item.w
        } row-start-${item.y + 1} row-span-${item.h}">
  ${item.i}
</div>`;
      })
      .join('\n');

    return `<div class="grid grid-cols-${cols} grid-rows-${rows} gap-${gap}">
  ${gridItemsTailwind}
</div>`;
  };

  const htmlCode = generateHtmlCode();
  const cssCode = generateCssCode();
  const jsxCode = generateJsxCode();
  const tailwindCode = generateTailwindCode();

  return {
    state: {
      htmlCode,
      cssCode,
      jsxCode,
      tailwindCode,
    },
  };
};
