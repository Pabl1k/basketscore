import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { api } from "../../config";
import { Standing as worldStanding } from "../../world/Standings/types";
import { mapWorldDataToSameType } from "../../dataMapper/Standings";
import { StandingsType } from "../../types/mappedType/Standings";

const fetchStandings = async (
  leagueId: string
): Promise<Array<worldStanding[]>> => {
  return await api("standings", {
    league: leagueId,
    season: 2022
  });
};

export const getWorldStandings = (
  leagueId: string,
  enabled = true
): UseQueryResult<StandingsType[]> => {
  return useQuery(
    ["worldStandings", leagueId],
    () => fetchStandings(leagueId),
    {
      select: (data: Array<worldStanding[]>) =>
        data[0].map(mapWorldDataToSameType),
      enabled
    }
  );
};
