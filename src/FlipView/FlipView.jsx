import { createClassNames } from "../createClassNames";
import "./FlipView.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} props.frontFace
 * @param {any} props.backFace
 * @param {boolean} props.flipped
 */
const FlipView = ({ classNames = [], frontFace, backFace, flipped }) => {
  const cn = createClassNames(
    "FlipView",
    `${flipped ? "FlipView--flipped" : "FlipView--normal"}`,
    ...classNames
  );
  return (
    <div className={cn}>
      <div className="FlipView__wrapper">
        <div className="FlipView__front-face">{frontFace}</div>
        <div className="FlipView__back-face">{backFace}</div>
      </div>
    </div>
  );
};

export { FlipView };
