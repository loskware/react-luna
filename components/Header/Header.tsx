import "./Header.scss";

interface HeaderProps {
  classNames?: string;
  leadingBar?: any;
  titleBar?: any;
  trailingBar?: any;
}

const Header = ({
  classNames,
  leadingBar,
  titleBar,
  trailingBar,
}: HeaderProps) => {
  return (
    <header className={`Header ${classNames ?? ""}`}>
      <div className="Header__leading">{leadingBar}</div>
      <div className="Header__title">{titleBar}</div>
      <div className="Header__trailing">{trailingBar}</div>
    </header>
  );
};

export { Header };
