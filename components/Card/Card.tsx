import "./Card.scss";

interface CardProps {
  classNames?: string;
  children?: any;
  paddingless?: boolean;
}

const Card = ({ classNames, children, paddingless = false }: CardProps) => {
  return (
    <div
      className={`Card ${classNames ?? ""} ${
        paddingless ? "Card__paddingless" : ""
      }`}
    >
      {children}
    </div>
  );
};

export { Card };
