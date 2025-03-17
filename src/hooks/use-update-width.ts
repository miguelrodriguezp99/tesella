import { useEffect, useState } from 'react';

export const useUpdateWidth = () => {
  const [containerWidth, setContainerWidth] = useState<number>(800);
  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector('.grid-layout-wrapper');
      if (container) {
        // -20 to account for padding/margins
        setContainerWidth(container.clientWidth - 20);
      }
    };

    setTimeout(updateWidth, 0);

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return containerWidth;
};
