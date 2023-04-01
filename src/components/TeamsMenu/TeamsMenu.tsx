import { FC } from "react";
import { teams as nbaData } from "../../assets/data/nba/Teams";
import { Link, useParams } from "react-router-dom";
import "./TeamsMenu.scss";
import { Team } from "../../assets/data/euroleague/Teams";
import { Team as NbaTeam } from "../../assets/data/nba/Teams";

interface Props {
  data: Team[] | NbaTeam[];
  selectedLeague: string;
}


const TeamsMenu: FC<Props> = ({data, selectedLeague}) => {

  return (
    <div className="teams-menu">
      {data.map((team) => (
        <Link
          key={team.id}
          to={`/${selectedLeague}/${team.name}`}
          className="teams-menu__team"
          title={team.name}
        >
          <img
            src={team.logo ? team.logo : undefined}
            alt={`NBA ${team.name} team logo`}
            className="teams-menu__team-logo"
          />
        </Link>
      ))}
    </div>
  );
};

export default TeamsMenu;
