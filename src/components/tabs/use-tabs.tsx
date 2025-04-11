import { useCallback, useEffect, useRef, useState } from 'react';

export const useTabs = () => {
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const indicator = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const updateIndicator = useCallback(() => {
    if (!indicator.current || !tabsRef.current[activeTab]) return;

    const currentTab = tabsRef.current[activeTab];
    if (!currentTab) return;

    const tabRect = currentTab.getBoundingClientRect();
    const tabListRect = currentTab.parentElement?.getBoundingClientRect();

    indicator.current.style.width = `${tabRect.width}px`;
    indicator.current.style.left = `${
      tabRect.left - (tabListRect?.left || 0)
    }px`;
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  const handleTabClick = (index: number): void => {
    setActiveTab(index);
  };

  return {
    actions: {
      handleTabClick,
      updateIndicator,
    },
    state: {
      activeTab,
      tabsRef,
      indicator,
    },
  };
};
