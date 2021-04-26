import React from "react";
import { classNames } from "../../classNames";
import "./Selector.css";

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
 * @param {{(
 *  newSelection: number,
 *  lastSelection: number,
 *  e: React.ChangeEvent<HTMLInputElement>
 * ) => boolean} [props.onChange]} props.onChange
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
        <label className="Selector-option" key={index}>
          <input
            className="Selector-option-input"
            type="radio"
            name={name}
            value={index}
            checked={selected === index}
            onChange={(e) => onChange?.(+e.target.value, selected, e)}
          />
          <span className="Selector-option-content">
            {icon}
            {title && <span>{title}</span>}
          </span>
        </label>
      ))}
    </div>
  );
};
