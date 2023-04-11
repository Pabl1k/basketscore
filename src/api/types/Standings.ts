import { LeagueType } from "./common";
import { Conference, Division } from "../nba/Standings/types";

// NBA part
export interface NbaData {
  conference: Conference;
  division: Division;
  gamesBehind: string | null;
  streak: number;
  winStreak: boolean;
  tieBreakerPoints: number | null;
}

// General
interface Group {
  name: string;
  points: number | null;
}

interface Country {
  id: number;
  name: string;
  code: string | null;
  flag: string | null;
}

interface Points {
  for: number;
  against: number;
}

export interface AllData {
  position: number;
  stage: string;
  group: Group;
  country: Country;
  points: Points;
  form: any | null;
  description: string | null;
}

export interface League {
  id: number;
  name: string | "nba";
  type: LeagueType;
  logo: string | null;
}

export interface Team {
  id: number;
  name: string;
  logo: string | null;
}

interface Result {
  total: number;
  percentage: string;
  home: number | null; // nba only
  away: number | null; // nba only
  lastTen: number | null; // nba only
}

export interface Games {
  played: number;
  win: Result;
  loss: Result;
}

export interface StandingsType {
  isNba: boolean;
  nbaData: NbaData | null;
  worldData: AllData | null;
  league: League;
  season: number;
  team: Team;
  games: Games;
}
