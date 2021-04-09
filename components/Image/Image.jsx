//
// Created by Andrea Montorio
// Project Crucible
// Copyright © 2020
//

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {string} props.src
 * @param {string} props.alt
 * @param {number} [props.height]
 * @param {number} [props.width]
 */
const Image = ({ classNames, src, alt = "", height, width }) => {
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
