import { createRef, FC, RefObject, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import "./ShowMore.scss";

interface Props {}

const ShowMore: FC<Props> = ({}) => {
  const [open, setOpen] = useState(false);
  // const modalRef = createRef<HTMLDivElement>();
  // useOutsideClick(modalRef, () => setOpen(false));

  return (
    <>
      <div className="show-more" onClick={() => setOpen(!open)}>
        <p>Show more</p>
        <Icon
          name={open ? "arrowUp" : "arrowDown"}
          style={{ marginLeft: 10 }}
          color="white"
          height="20"
          width="20"
        />
      </div>
      <Modal open={open} />
    </>
  );
};

export default ShowMore;

const Modal: FC<{ open: boolean }> = ({ open }) => {
  return open ? (
    <div className="show-more__modal">
      <Input />
    </div>
  ) : null;
};
