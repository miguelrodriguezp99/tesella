import './button.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}
export const Button = ({
  onClick,
  disabled,
  children = 'Button',
}: ButtonProps) => {
  return (
    <button className="grid-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
