import { Color } from "./Icon";

export const getColor = (color: Color) => {
  const colorList = {
    black: "#09080e",
    white: "#fff7ee"
  };

  return colorList[color];
};
