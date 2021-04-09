interface ImageProps {
  classNames?: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
}

const Image = ({ classNames, src, alt = "", height, width }: ImageProps) => {
  return (
    <img
      className={`Image ${classNames ?? ""}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export { Image };
