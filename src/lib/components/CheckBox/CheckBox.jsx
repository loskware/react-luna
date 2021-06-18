import React, { useLayoutEffect, useRef } from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef CheckBoxProps
 * @property {string} [className]
 * @property {"accent"|"danger"|"warning"|"success"} [theme] color theme
 * @property {string} [value] checkbox value
 * @property {string[]} [group] checkbox group selected values
 * @property {boolean} [checked] toggle checkbox state
 * @property {boolean} [indeterminate] set indeterminate checkbox state
 * @property {boolean} [disabled] set indeterminate checkbox state
 * @property {string} [label] label text
 * @property {"left"|"right"} [labelPosition] label position
 * @property {React.CSSProperties} [labelStyle] label inline style
 * @property {(value: string) => void} [onToggle] 
 */

/**
 * A luna-styled checkbox,
 * @param {CheckBoxProps} props
 */
export const CheckBox = ({
  className,
  theme = "accent",
  value,
  group,
  checked,
  indeterminate,
  disabled,
  label,
  labelPosition = "right",
  labelStyle,
  onToggle,
  ...other
}) => {
  const input = useRef(null)

  useLayoutEffect(() => {
    input.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const cn = classNames(
    "CheckBox",
    `CheckBox-${theme}`,
    `CheckBox-${labelPosition}Label`,
    indeterminate && "CheckBox-indeterminate",
    disabled && "CheckBox-disabled",
    className
  );
  const state = checked ?? !!group?.includes(value);

  function handleClick() {
    !disabled && onToggle?.(value);
  }

  return (
    <div className={cn} onClick={handleClick}>
      <input
        ref={input}
        type="checkbox"
        readOnly
        checked={state}
        disabled={disabled}
        {...other}
      />
      <span className="CheckBox-mark" />
      {label && (
        <span className="CheckBox-label" style={labelStyle}>
          {label}
        </span>
      )}
    </div>
  );
};
