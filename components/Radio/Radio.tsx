import React from "react";
import "./Radio.scss";

type RadioChangeEventHandler = (selected: number, prevSelected: number, event: React.ChangeEvent<HTMLInputElement>) => boolean | undefined;

interface RadioProps {
  classNames?: string;
  children: Array<{ label: string }>;
  name: string;
  selected: number;
  onChange?: RadioChangeEventHandler
}

const Radio = ({
  classNames,
  children,
  name,
  selected,
  onChange,
}: RadioProps) => {
  return (
    <div className={`SegmentedControl ${classNames ?? ""}`}>
      {children.map(({ label }, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={index}
            checked={selected === index}
            onChange={(e) => onChange?.(+e.target.value, selected, e)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};

export { Radio };