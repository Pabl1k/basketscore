import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export type APICallResponse<T> = Promise<T>;

export type useQueryResponse<T> = UseQueryResult<T, AxiosError>;

export type useQueryCustomOptions<T, K extends QueryKey = QueryKey> =
  | Omit<UseQueryOptions<T, AxiosError, T, K>, "queryFn">
  | Omit<UseQueryOptions<T, AxiosError, T, K>, "queryFn" | "queryKey">;

type CustomQueryKey<T> = (string | T | undefined)[];
export type QueryParams<T> = { queryKey: CustomQueryKey<T> };
