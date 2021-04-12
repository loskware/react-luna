import "./Radio.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {{ label: string }[]} props.children
 * @param {string} props.name
 * @param {number} props.selected
 * @param {function} props.onChange
 */
export const Radio = ({
  classNames,
  children,
  name,
  selected,
  onChange,
}) => {
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
