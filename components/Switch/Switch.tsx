import "./Switch.scss";

type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.ChangeEvent<HTMLInputElement>
) => void;

interface SwitchProps {
  classNames?: string;
  checked: boolean;
  children?: any;
  size?: "default" | "large" | "xlarge";
  onChange?: SwitchChangeEventHandler;
}

const Switch = ({
  classNames,
  checked,
  children,
  size = "default",
  onChange,
}: SwitchProps) => {
  return (
    <label className={`Switch Switch--${size} ${classNames ?? ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked, e)}
      />
      <span className="Switch__track"></span>
      <span className="Switch__slider">{children}</span>
    </label>
  );
};

export { Switch };
