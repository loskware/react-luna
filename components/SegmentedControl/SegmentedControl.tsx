import "./SegmentedControl.scss";

type SegmentedControlChild = {
  icon?: any;
  title?: string;
};

type SegmentedControlChangeEventHandler = (
  selected: number,
  prevSelected: number,
  event: React.ChangeEvent<HTMLInputElement>
) => boolean | undefined;

interface SegmentedControlProps {
  classNames?: string;
  children: Array<SegmentedControlChild>;
  name: string;
  selected: number;
  onChange?: SegmentedControlChangeEventHandler;
}

export const SegmentedControl = ({
  classNames,
  children,
  name,
  selected,
  onChange,
}: SegmentedControlProps) => {
  return (
    <div className={`SegmentedControl ${classNames ?? ""}`}>
      {children.map(({ icon, title }, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={index}
            checked={selected === index}
            onChange={(e) => onChange?.(+e.target.value, selected, e)}
          />
          <span>
            {icon}
            {title && <span>{title}</span>}
          </span>
        </label>
      ))}
    </div>
  );
};
