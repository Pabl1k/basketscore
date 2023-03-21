import { FC } from "react";
import { ReactSVG } from "react-svg";

type Name = "github";

interface Props {
  alt?: string;
  className?: string;
  name: Name;
  width?: string;
  height?: string;
}

const Icon: FC<Props> = ({
  alt,
  className,
  name,
  height = "30",
  width = "30"
}) => {
  return (
    <ReactSVG
      wrapper="span"
      aria-label={alt ? alt : `${name} icon`}
      className={className}
      style={{ lineHeight: 0 }}
      src={`src/assets/Icons/${name}.svg`}
      beforeInjection={(svg) => {
        svg.setAttribute("width", width ?? svg.getAttribute("width") ?? "");
        svg.setAttribute("height", height ?? svg.getAttribute("height") ?? "");
      }}
    />
  );
};

export default Icon;
