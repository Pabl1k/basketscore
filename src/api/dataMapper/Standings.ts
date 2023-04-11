import {
  AllData,
  Games,
  League,
  NbaData,
  StandingsType,
  Team
} from "../types/Standings";
import { Standing as nba } from "../nba/Standings/types";
import { Standing as world } from "../world/Standings/types";

export const mapNbaDataToSameType = (data: nba): StandingsType => {
  const nbaData: NbaData = {
    conference: data.conference,
    division: data.division,
    gamesBehind: data.gamesBehind,
    streak: data.streak,
    winStreak: data.winStreak,
    tieBreakerPoints: data.tieBreakerPoints
  };

  const league: League = {
    id: 12,
    name: "nba",
    type: "cup",
    logo: "src/assets/Icons/nba.svg"
  };

  const team: Team = {
    id: data.team.id,
    name: data.team.name,
    logo: data.team.logo
  };

  const games: Games = {
    played: Number(data.win.total) + Number(data.loss.total),
    win: {
      ...data.win
    },
    loss: {
      ...data.loss
    }
  };

  return {
    isNba: true,
    nbaData,
    worldData: null,
    league,
    season: data.season,
    team,
    games
  };
};

export const mapWorldDataToSameType = (data: world): StandingsType => {
  const worldData: AllData = {
    position: data.position,
    stage: data.stage,
    group: {
      ...data.group
    },
    country: {
      ...data.country
    },
    points: {
      ...data.points
    },
    form: data.form,
    description: data.description
  };

  const league: League = {
    id: data.league.id,
    name: data.league.name,
    type: data.league.type,
    logo: data.league.logo
  };

  const team: Team = {
    ...data.team
  };

  const games: Games = {
    played: data.games.played,
    win: {
      ...data.games.win,
      home: null,
      away: null,
      lastTen: null
    },
    loss: {
      ...data.games.lose,
      home: null,
      away: null,
      lastTen: null
    }
  };

  return {
    isNba: false,
    nbaData: null,
    worldData,
    league,
    season: data.league.season,
    team,
    games
  };
};
