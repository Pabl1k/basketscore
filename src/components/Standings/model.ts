import {
  Conference,
  Division,
  Standings as standings
} from "../../assets/data/nba/Standings";

export const getTableList = (
  type: "conference" | "division",
  name: Conference | Division
) => {
  return standings
    .filter((team) => team[type].name === name)
    .sort((a, b) => a[type].rank - b[type].rank);
};
