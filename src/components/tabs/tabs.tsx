import React, { ReactElement } from 'react';
import './tabs.css';
import { TabProps } from './tab';
import { useTabs } from './use-tabs';

interface TabsProps {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
  centerTabs?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ children, centerTabs = false }) => {
  const {
    state: { tabsRef, indicator, activeTab },
    actions: { handleTabClick },
  } = useTabs();
  return (
    <>
      <div
        role="tablist"
        aria-label="tabs"
        className={`tablist horizontal`}
        style={{
          margin: centerTabs ? 'auto' : '0',
        }}
      >
        <div ref={indicator} className={`indicator horizontal`}></div>

        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as ReactElement<TabProps>, {
            //@ts-expect-error ref is a valid prop
            ref: (el: HTMLButtonElement | null) =>
              (tabsRef.current[index] = el),
            tabIndex: index === 0 ? 0 : -1,
            onClick: () => handleTabClick(index),
            className: index === activeTab ? 'active' : '',
          });
        })}
      </div>

      {React.Children.map(children, (child, index) => {
        return (
          <div
            role="tabpanel"
            id={`panel-${child.key || index}`}
            aria-labelledby={`tab-${child.key || index}`}
            tabIndex={index}
            className={`tab-content ${index !== activeTab ? 'not-active' : ''}`}
          >
            {child.props.children}
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
