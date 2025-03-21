import { useEffect, RefObject } from 'react';

const useRipple = (ref: RefObject<HTMLElement | null>): void => {
  useEffect(() => {
    if (!ref.current) return;

    const handleClick = (e: MouseEvent): void => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.classList.add('ripple-dark');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ref.current.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    ref.current.addEventListener('click', handleClick);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener('click', handleClick);
    };
  }, [ref]);
};

export default useRipple;
