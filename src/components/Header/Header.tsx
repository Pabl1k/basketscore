import { FC } from "react";
import ShowMore from "../ShowMore/ShowMore";
import Icon from "../Icon/Icon";
import "./Header.scss";
import { useLayout } from "../../hooks/useLayout";
import AppLogo from "../AppLogo/AppLogo";
import { calculateItemWidth } from "./model";
import { Link } from "react-router-dom";

const initialHeader = [
  {
    id: 12,
    name: "NBA",
    type: "League",
    logo: "https://media-1.api-sports.io/basketball/leagues/12.png",
    country: {
      id: 5,
      name: "USA",
      code: "US",
      flag: "https://media-3.api-sports.io/flags/us.svg"
    }
  },
  {
    id: 120,
    name: "Euroleague",
    type: "cup",
    logo: "https://media-1.api-sports.io/basketball/leagues/120.png",
    country: {
      id: 55,
      name: "Europe",
      code: null,
      flag: null
    }
  },
  {
    id: 194,
    name: "Eurocup",
    type: "cup",
    logo: "https://media-1.api-sports.io/basketball/leagues/194.png",
    country: {
      id: 55,
      name: "Europe",
      code: " ",
      flag: "https://media-1.api-sports.io/flags/ .svg"
    }
  },
  {
    id: 202,
    name: "Champions League",
    type: "cup",
    logo: "https://media-3.api-sports.io/basketball/leagues/202.png",
    country: {
      id: 55,
      name: "Europe",
      code: " ",
      flag: "https://media-2.api-sports.io/flags/ .svg"
    }
  }
  // {
  //   id: 208,
  //   name: "Champions League",
  //   type: "cup",
  //   logo: "https://media-3.api-sports.io/basketball/leagues/202.png",
  //   country: {
  //     id: 55,
  //     name: "Europe",
  //     code: " ",
  //     flag: "https://media-2.api-sports.io/flags/ .svg"
  //   }
  // },
  // {
  //   id: 205,
  //   name: "Champions League",
  //   type: "cup",
  //   logo: "https://media-3.api-sports.io/basketball/leagues/202.png",
  //   country: {
  //     id: 55,
  //     name: "Europe",
  //     code: " ",
  //     flag: "https://media-2.api-sports.io/flags/ .svg"
  //   }
  // }
];

interface Props {}

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

const Header: FC<Props> = ({}) => {
  const { sm } = useLayout(document.body);

  const getPath = (name: string) => {
    return `/${encodeURIComponent(name.toLowerCase())}`;
  };

  return (
    <header>
      <div className="header">
        <AppLogo />
        <div className="header__container">
          <div className="header__leagues">
            {initialHeader.map((league) => (
              <Link
                key={league.id}
                to={getPath(league.name)}
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
