import { Conference, Division } from "../../assets/data/nba/Standings";

const isConference = (title: Conference | Division) => {
  return title === "west" || title === "east";
};

export const getTableTitle = (title: Conference | Division) => {
  return isConference(title) ? `${title}ern conference` : `${title} division`;
};

export const getTableType = (title: Conference | Division) => {
  return isConference(title) ? "conference" : "division";
};
