import Tab from '../tabs/tab';
import Tabs from '../tabs/tabs';
import './codes.css';
import { useCodes } from './use-codes';
import { CodeBlock } from '../code-block/code-block';

export const Codes = () => {
  const {
    state: { htmlCode, cssCode, jsxCode, tailwindCode },
  } = useCodes();

  return (
    <div className="codes-container">
      <Tabs>
        <Tab title="HTML" key="html">
          <CodeBlock code={htmlCode} language="html" />
        </Tab>
        <Tab title="JSX" key="jsx">
          <CodeBlock code={jsxCode} language="jsx" />
        </Tab>
        <Tab title="CSS" key="css">
          <CodeBlock code={cssCode} language="css" />
        </Tab>
        <Tab title="TAILWIND" key="tailwind">
          <CodeBlock code={tailwindCode} language="html" />
        </Tab>
      </Tabs>
    </div>
  );
};
