import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Selector.scss";

/**
 * @typedef {Object} SegmentedControlChild
 * @property {any} [icon]
 * @property {string} [title]
 */

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {SegmentedControlChild[]} props.children
 * @param {string} props.name
 * @param {number} props.selected
 * @param {function} props.onChange
 */
export const Selector = ({
  classNames = [],
  children,
  name,
  selected,
  onChange,
}) => {
  const cn = createClassNames("Selector", ...classNames);
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
