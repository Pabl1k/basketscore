import { CSSProperties, FC } from "react";
import { ReactSVG } from "react-svg";
import { getColor } from "./model";

type Name =
  | "nba"
  | "arrowUp"
  | "arrowDown"
  | "euroleague"
  | "eurocup"
  | "search";

export type Color = "white";

interface Props {
  alt?: string;
  className?: string;
  name: Name;
  style?: CSSProperties;
  color?: Color;
  height?: string;
  width?: string;
}

const Icon: FC<Props> = ({
  alt,
  className,
  name,
  style,
  color,
  height = "30",
  width = "30"
}) => {
  return (
    <ReactSVG
      wrapper="span"
      aria-label={alt ? alt : `${name} icon`}
      className={className}
      style={{ lineHeight: 0, ...style }}
      src={`src/assets/Icons/${name}.svg`}
      beforeInjection={(svg) => {
        color && svg.setAttribute("fill", getColor(color));
        svg.setAttribute("height", height ?? svg.getAttribute("height") ?? "");
        svg.setAttribute("width", width ?? svg.getAttribute("width") ?? "");
      }}
    />
  );
};

export default Icon;
