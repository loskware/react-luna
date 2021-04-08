import "./Header.scss";

/**
 * @param {object} props
 * @param {string} props.classNames
 * @param {any} [props.leadingBar]
 * @param {any} [props.titleBar]
 * @param {any} [props.trailingBar]
 */
const Header = ({ classNames, leadingBar, titleBar, trailingBar }) => {
  return (
    <header className={`Header ${classNames ?? ""}`}>
      <div className="Header__leading">{leadingBar}</div>
      <div className="Header__title">{titleBar}</div>
      <div className="Header__trailing">{trailingBar}</div>
    </header>
  );
};

export { Header };
