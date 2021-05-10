import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * Segmented Control Option
 * @typedef Segment
 * @property {any} [icon]
 * @property {string} [title]
 * @property {string|number} [value] if value is not provided the option index is used instead
 */

/**
 * @typedef SegmentedControlProps
 * @property {Array<Segment>} segments array of icon/label objects
 * @property {string|number} selected set the selected option value
 * @property {"plain"|"accent"|"danger"|"warning"|"success"} [variant] color variant
 */

/**
 * Implementation of iOS & macOS SegmentedControl
 * @param {SegmentedControlProps & React.ComponentPropsWithoutRef<"div">} props
 */
export const SegmentedControl = (props) => {
  const {
    className,
    onChange,
    segments,
    selected,
    variant = "accent",
    ...other
  } = props;

  const cn = classNames(
    "SegmentedControl",
    `SegmentedControl-${variant}`,
    className
  );

  return (
    <div className={cn} {...other}>
      {segments.map(({ icon, title, value }, index) => (
        <label className="SegmentedControl-option" key={index}>
          <input
            className="SegmentedControl-option-input"
            type="radio"
            value={value || index}
            checked={selected == value || selected == index}
            onChange={onChange}
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
