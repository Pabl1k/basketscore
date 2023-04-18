import { Country, League, Team } from "../../types/common";

interface Group {
  name: string;
  points: number | null;
}


interface Result {
  total: number;
  percentage: string;
}

interface Games {
  played: number;
  win: Result;
  lose: Result;
}

interface Points {
  for: number;
  against: number;
}

export interface Standing {
  position: number;
  stage: string;
  group: Group;
  team: Team;
  league: League;
  country: Country;
  games: Games;
  points: Points;
  form: any | null;
  description: string | null;
}
