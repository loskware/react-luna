import "./FlipView.scss";

interface FlipViewProps {
  classNames?: string;
  frontFace: any;
  backFace: any;
  flipped: boolean;
}

const FlipView = ({
  classNames,
  frontFace,
  backFace,
  flipped,
}: FlipViewProps) => (
  <div
    className={`FlipView ${
      flipped ? "FlipView--flipped" : "FlipView--normal"
    } ${classNames ?? ""}`}
  >
    <div className="FlipView__wrapper">
      <div className="FlipView__front-face">{frontFace}</div>
      <div className="FlipView__back-face">{backFace}</div>
    </div>
  </div>
);

export { FlipView };
