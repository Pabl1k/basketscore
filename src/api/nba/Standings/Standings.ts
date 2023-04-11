import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { NbaApi } from "../../config";
import { mapNbaDataToSameType } from "../../dataMapper/Standings";
import { Standing as nbaStanding } from "./types";
import { StandingsType } from "../../types/Standings";

const fetchStandings = async (): Promise<nbaStanding[]> => {
  return await NbaApi("standings", {
    league: "Standard",
    season: 2022
  });
};

export const getNbaStandings = (
  enabled: boolean
): UseQueryResult<StandingsType[]> => {
  return useQuery(["nbaStandings"], fetchStandings, {
    select: (data) => data.map(mapNbaDataToSameType),
    enabled
  });
};
