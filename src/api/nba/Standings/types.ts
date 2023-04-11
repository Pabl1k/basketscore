export type DivisionType =
  | "atlantic"
  | "central"
  | "northwest"
  | "pacific"
  | "southeast"
  | "southwest";

export type ConferenceType = "east" | "west";

type LeagueType =
  | "africa"
  | "orlando"
  | "sacramento"
  | "standard"
  | "utah"
  | "vegas";

interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string | null;
}

export interface Conference {
  name: ConferenceType;
  rank: number;
  win: number;
  loss: number;
}

export interface Division {
  name: DivisionType;
  rank: number;
  win: number;
  loss: number;
  gamesBehind: string | null;
}

interface Results {
  home: number;
  away: number;
  total: number;
  percentage: string;
  lastTen: number;
}

export interface Standing {
  league: LeagueType;
  season: number;
  team: Team;
  conference: Conference;
  division: Division;
  win: Results;
  loss: Results;
  gamesBehind: string | null;
  streak: number;
  winStreak: boolean;
  tieBreakerPoints: number | null;
}
