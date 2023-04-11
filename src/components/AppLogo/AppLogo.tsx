import "./AppLogo.scss";
import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <Link to="/" className="app-logo">
      Pseudo LOGO
    </Link>
  );
};

export default AppLogo;
