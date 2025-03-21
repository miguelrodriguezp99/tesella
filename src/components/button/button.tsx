import React, { useRef, ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';
import useRipple from '@/hooks/use-ripple';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useRipple(buttonRef);

  return (
    <button ref={buttonRef} className={`ripple-button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
