import "./PacmanLoader.scss";

interface PacmanLoaderProps {
  classNames?: string;
}
const PacmanLoader = ({ classNames }: PacmanLoaderProps) => {
  return (
    <div className={`PacmanLoader ${classNames ?? ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { PacmanLoader };
