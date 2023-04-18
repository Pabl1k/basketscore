import { api } from "../../config";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GameData, Games, H2HGame } from "./types";

const fetchGames = async (game: GameData) => {
  const { gameId, date, leagueId, season, teamId, timezone } = game;

  return await api("games", {
    id: gameId,
    date,
    league: leagueId,
    season,
    team: teamId,
    timezone
  });
};

export const getGames = (gameData: GameData): UseQueryResult<Games[]> => {
  return useQuery(["games", gameData], () => fetchGames(gameData));
};

const fetchH2HGames = async (game: H2HGame) => {
  const { h2h, date, leagueId, season, timezone } = game;

  return await api("games", {
    h2h,
    date,
    league: leagueId,
    season,
    timezone
  });
};

export const getH2HGames = (h2hGame: H2HGame) => {
  return useQuery(["h2hGame", h2hGame], () => fetchH2HGames(h2hGame));
};
