import {axios} from "../../../lib/axios";
import type { Player, PlayerByTeam } from "../types";

export enum SORT_TYPE {
  TEAM = 'team',
}

export const getPlayer = async(playerId: string): Promise<Player> => {
  const response = await axios.get(`/stats/${playerId}`);
  return response.data as Player;
}

export const getPlayerByTeam = async(playerId: string, parameters?: {sort: SORT_TYPE}): Promise<PlayerByTeam> => {
  const response = await axios.get(`/stats/${playerId}`, {params: parameters});
  return response.data as PlayerByTeam;
}