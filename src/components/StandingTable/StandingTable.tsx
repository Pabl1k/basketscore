import { FC } from "react";
import {
  Conference,
  Division,
  Standing
} from "../../assets/data/nba/Standings";
import { getTableTitle, getTableType } from "./model";
import "./StandingTable.scss";

const StandingTable: FC<{
  title: Conference | Division;
  firstTable?: boolean;
  data: Standing[];
}> = ({ title, firstTable = false, data }) => {
  const type = getTableType(title);

  return (
    <div className="standing-table">
      <span className="standing-table__title">{getTableTitle(title)}</span>
      {firstTable && (
        <div className="standing-table__values">
          <span className="standing-table__column">W</span>
          <span className="standing-table__column">L</span>
          <span className="standing-table__column">%</span>
        </div>
      )}
      {data.map((team) => (
        <div className="standing-table__team" key={team.team.id}>
          <div className="standing-table__column">
            <span>{team[type].rank}</span>
          </div>
          <div className="standing-table__column">
            <img
              src={team.team.logo || ""}
              alt={`${team.team.name} logo`}
              className="standing-table__team-logo"
              title={team.team.name}
            />
          </div>
          <div className="standing-table__name-container">
            <span>{team.team.name}</span>
          </div>
          <div className="standing-table__column">
            <span>{team.win.total}</span>
          </div>
          <div className="standing-table__column">
            <span>{team.loss.total}</span>
          </div>
          <div className="standing-table__column">
            <span>{team.win.percentage}</span>
          </div>
          <div className="standing-table__column">
            <span>{team.win.percentage}</span>
          </div>
          <div className="standing-table__column">
            <span>{team.win.percentage}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandingTable;
