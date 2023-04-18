export type LeagueType = "cup" | "league";

export type DateType = `${string}-${string}-${string}`

export interface League {
  id: number;
  name: string;
  type: LeagueType;
  season: number;
  logo: string;
}

export interface Country {
  id: number;
  name: string;
  code: string | null;
  flag: string | null;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
