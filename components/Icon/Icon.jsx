/**
 * @param {object} props
 * @param {number} [props.size]
 * @param {any} props.children
 * @param {string} [props.tooltip]
 * @returns 
 */
export function Icon({
  size = 24,
  children,
  tooltip = "",
}) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
      <title>{tooltip}</title>
    </svg>
  );
}