import React from "react";
import { classNames } from "../../classNames";

/**
 * @typedef {Object} SegmentedControlChild
 * @property {any} [icon]
 * @property {string} [title]
 */

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {SegmentedControlChild[]} props.children
 * @param {number} props.selected
 * @param {{(
 *  newSelection: number,
 *  lastSelection: number,
 *  e: React.ChangeEvent<HTMLInputElement>
 * ) => void} [props.onChange]} [props.onChange]
 * @param {"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const Selector = ({
  classes = [],
  children,
  selected,
  onChange,
  variant = "accent",
}) => {
  const cn = classNames("Selector", `Selector-${variant}`, ...classes);
  return (
    <div className={cn}>
      {children.map(({ icon, title }, index) => (
        <label className="Selector-option" key={index}>
          <input
            className="Selector-option-input"
            type="radio"
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
