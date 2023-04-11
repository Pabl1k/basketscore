import ShowMore from "../ShowMore/ShowMore";
import Icon from "../Icon/Icon";
import "./Header.scss";
import { useLayout } from "../../hooks/useLayout";
import AppLogo from "../AppLogo/AppLogo";
import { calculateItemWidth, initialHeader } from "./model";
import { Link } from "react-router-dom";

const getLeagueLogo = (id: number, name: string, logo: string, sm: boolean) => {
  switch (id) {
    case 120:
      return (
        <Icon
          name="euroleague"
          height={sm ? "100%" : "80"}
          width={sm ? "100%" : "80"}
        />
      );
    case 194:
      return (
        <Icon
          name="eurocup"
          height={sm ? "100%" : "80"}
          width={sm ? "100%" : "80"}
        />
      );
    default:
      return (
        <img
          src={logo}
          alt={`${name} logo`}
          style={{ height: sm ? 60 : "100%" }}
        />
      );
  }
};

const Header = () => {
  const { sm } = useLayout(document.body);

  return (
    <header>
      <div className="header">
        <AppLogo />
        <div className="header__container">
          <div className="header__leagues">
            {initialHeader.map((league) => (
              <Link
                key={league.id}
                to={league.id.toString()}
                className="header__league"
                style={{ width: calculateItemWidth(initialHeader.length) }}
                title={league.name}
              >
                {getLeagueLogo(league.id, league.name, league.logo, sm)}
              </Link>
            ))}
          </div>
          <ShowMore />
        </div>
      </div>
      <div className="gap" />
      {/*<Favorites />*/}
    </header>
  );
};

export default Header;
