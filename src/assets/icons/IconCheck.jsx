export function IconCheck({
  size = 24,
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
      <polyline points="20 6 9 17 4 12"></polyline>
      <title>{tooltip}</title>
    </svg>
  );
}
