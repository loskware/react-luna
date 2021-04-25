import React from "react";
import { classNames } from "../../classNames";
import "./Selector.scss";

/**
 * @typedef {Object} SegmentedControlChild
 * @property {any} [icon]
 * @property {string} [title]
 */

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {SegmentedControlChild[]} props.children
 * @param {string} props.name
 * @param {number} props.selected
 * @param {function} props.onChange
 */
export const Selector = ({
  classes = [],
  children,
  name,
  selected,
  onChange,
}) => {
  const cn = classNames("Selector", ...classes);
  return (
    <div className={cn}>
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
