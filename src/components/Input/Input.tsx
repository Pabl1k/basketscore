import { FC } from "react";
import "./Input.scss";
import Icon from "../Icon/Icon";

interface Props {}

const Input: FC<Props> = ({}) => {
  return (
    <div className="input">
      <Icon name="search" />
      <input />
    </div>
  );
};

export default Input;
