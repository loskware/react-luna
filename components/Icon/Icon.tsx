interface IconProps {
  size?: number;
  children: any;
  tooltip?: string;
}

export function Icon({ size = 24, children, tooltip = "" }: IconProps) {
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
