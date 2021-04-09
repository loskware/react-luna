import "./Text.scss";

interface TextProps {
  classNames?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "accent" | "onAccent";
  size?: "body" | "title" | "subtitle" | "label";
  weight?: 300 | 400 | 600 | 700;
}

const Text = ({
  classNames,
  children,
  color = "primary",
  size = "body",
  weight = 400,
}: TextProps) => {
  return (
    <p
      className={`Text Text--color-${color} Text--size-${size}
       Text--weight-${weight} ${classNames ?? ""}`}
    >
      {children}
    </p>
  );
};

export { Text };
