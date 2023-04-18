import { Country, League, Team } from "../../types/common";

export interface GameData {
  gameId?: number;
  date?: string;
  leagueId?: number;
  season?: string;
  teamId?: string;
  timezone?: string;
}

export interface H2HGame extends Omit<GameData, "gameId" | "teamId"> {
  h2h: `${string}-${string}`;
}

interface Status {
  long: string;
  short: string;
  timer: any | null;
}

interface Teams {
  home: Team;
  away: Team;
}

interface Score {
  quarter_1: number;
  quarter_2: number;
  quarter_3: number;
  quarter_4: number;
  over_time: number | null;
  total: number;
}

interface Scores {
  home: Score;
  away: Score;
}

export interface Games {
  id: number;
  date: string;
  time: string;
  timestamp: number;
  timezone: string;
  stage: any | null;
  week: string;
  status: Status;
  league: League;
  country: Country;
  teams: Teams;
  scores: Scores;
}
