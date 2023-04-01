import axios from "axios";
import { Params, pathCreator } from "./model";
import { useEnv } from "../hooks/useEnv";

const { VITE_API_KEY, VITE_NBA_API_KEY } = useEnv();

export const api = async (endpoint: string, params?: Params) => {
  const path = pathCreator(endpoint, params);

  const config = {
    method: "get",
    url: `https://v1.basketball.api-sports.io/${path}`,
    headers: {
      "x-rapidapi-key": VITE_API_KEY,
      "x-rapidapi-host": "v1.basketball.api-sports.io"
    }
  };

  try {
    const response = await axios(config);
    console.log(response);

    return response.data.response;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const NbaApi = async (endpoint: string, params?: Params) => {
  const path = pathCreator(endpoint, params);

  const config = {
    method: "get",
    url: `https://v1.basketball.api-sports.io/${path}`,
    headers: {
      "x-rapidapi-key": VITE_NBA_API_KEY,
      "x-rapidapi-host": "v2.nba.api-sports.io"
    }
  };

  try {
    const response = await axios(config);
    console.log(response);

    return response.data.response;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
