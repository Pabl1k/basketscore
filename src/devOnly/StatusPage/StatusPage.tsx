import { useQuery } from "@tanstack/react-query";
import { api, NbaApi } from "../../api/config";
import { useQueryResponse } from "../../api/types/baseTypes";

const StatusPage = () => {
  const fetchNbaStatus = async () => {
    return await NbaApi("status");
  };
  const fetchWorldStatus = async () => {
    return await api("status");
  };

  const getStatus = (type?: "nba"): useQueryResponse<any> => {
    if (type === "nba") {
      return useQuery(["nbaStatus"], fetchNbaStatus);
    } else {
      return useQuery(["worldStatus"], fetchWorldStatus);
    }
  };
  const { data: nbaStatus } = getStatus("nba");
  const { data: worldStatus } = getStatus();

  return nbaStatus && worldStatus ? (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>NBA</h1>
        <span>Requests made: {nbaStatus.requests.current}</span>
        <span>Day limit: {nbaStatus.requests.limit_day}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
        <h1>REST</h1>
        <span>{JSON.stringify(worldStatus)}</span>
      </div>
    </div>
  ) : (
    <h1>Status request failed</h1>
  );
};

export default StatusPage;
