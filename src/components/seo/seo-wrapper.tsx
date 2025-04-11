import { FC, ReactNode } from 'react';
import './seo-wrapper.css';

interface SeoWrapperProps {
  children: ReactNode;
}

export const SeoWrapper: FC<SeoWrapperProps> = ({ children }) => {
  return (
    <main className="seo-wrapper">
      <h1 className="seo-main-heading">
        Tesella - CSS Grid & Tailwind Layout Generator
      </h1>

      <section aria-labelledby="tool-description">
        <h2 id="tool-description" className="seo-section-heading">
          Visual Grid Layout Builder for Web Developers
        </h2>
        <p className="seo-description">
          Create responsive CSS Grid layouts visually with our interactive grid
          generator. Configure columns, rows, and spacing, then export clean
          code in HTML, CSS, JSX, or Tailwind format.
        </p>
      </section>

      {/* The actual application UI */}
      <div className="seo-app-container">{children}</div>

      <footer className="seo-footer">
        <section aria-labelledby="features-section">
          <h2 id="features-section" className="seo-section-heading">
            Key Features
          </h2>
          <ul className="seo-features-list">
            <li>
              <strong>Visual Grid Editor</strong> - Drag-and-drop interface for
              designing layouts
            </li>
            <li>
              <strong>Multi-format Code Generation</strong> - HTML, CSS, JSX,
              and Tailwind output
            </li>
            <li>
              <strong>Real-time Updates</strong> - See code changes instantly as
              you modify the grid
            </li>
            <li>
              <strong>Customizable Parameters</strong> - Adjust columns, rows,
              height, and spacing
            </li>
            <li>
              <strong>Developer-Friendly</strong> - Clean, optimized code ready
              for production
            </li>
          </ul>
        </section>
      </footer>
    </main>
  );
};
