import React from "react";
import { classNames } from "../../tools/classNames";

/**
 * Segmented Control Option
 * @typedef {Object} Segment
 * @property {any} [icon]
 * @property {string} [title]
 */

/**
 * Callback called on SegmentedControl selection change
 * @callback OnSelectionChange
 * @param {number} newSelection
 * @param {number} lastSelection
 * @param {React.ChangeEvent<HTMLInputElement>} event
 */

/**
 * Implementation of iOS & macOS SegmentedControl
 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {Array<Segment>} props.children array of icon/label objects
 * @param {number} props.selected set the selected option
 * @param {OnSelectionChange} [props.onChange]
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const SegmentedControl = ({
  classes = [],
  children,
  selected,
  onChange,
  variant = "accent",
}) => {
  const cn = classNames(
    "SegmentedControl",
    `SegmentedControl-${variant}`,
    ...classes
  );
  return (
    <div className={cn}>
      {children.map(({ icon, title }, index) => (
        <label className="SegmentedControl-option" key={index}>
          <input
            className="SegmentedControl-option-input"
            type="radio"
            value={index}
            checked={selected === index}
            onChange={(e) => onChange?.(+e.target.value, selected, e)}
          />
          <span className="SegmentedControl-option-content">
            {icon}
            {title && <span>{title}</span>}
          </span>
        </label>
      ))}
    </div>
  );
};
