import React from "react";
import { classNames } from "../../classNames";
import "./Radio.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {{ label: string }[]} props.children
 * @param {string} props.name
 * @param {number} props.selected
 * @param {function} props.onChange
 */
export const Radio = ({
  classes = [],
  children,
  name,
  selected,
  onChange,
}) => {
  const cn = classNames("SegmentedControl", ...classes);
  return (
    <div className={cn}>
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
