import React, { forwardRef } from 'react';
import './tabs.css';

export interface TabProps {
  title: string | React.ReactNode;
  children?: React.ReactNode;
  key?: string;
  tabIndex?: number;
  onClick?: () => void;
  className?: string;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ title, tabIndex, onClick, className }, ref) => {
    return (
      <button
        role="tab"
        aria-selected="true"
        aria-controls={`panel-${typeof title === 'string' ? title : 'tab'}`}
        id={`tab-${typeof title === 'string' ? title : 'tab'}`}
        tabIndex={tabIndex}
        className={`tab ${className || ''}`}
        onClick={onClick}
        ref={ref}
      >
        <span className="tab-title">{title}</span>
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export default Tab;
