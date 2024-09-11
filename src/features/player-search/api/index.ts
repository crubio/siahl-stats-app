import {axios} from "../../../lib/axios";

export type PlayerSearchResponse<T> = {
  data: Record<string, T>;
};

export const getPlayerSearch = async <T>(searchTerm: string): Promise<Array<T>> => {
  const response = await axios.get(`/stats/search/${searchTerm}`);
  return response.data as Array<T>;
};