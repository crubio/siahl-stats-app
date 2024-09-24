import { useParams, useSearchParams } from "react-router-dom";
import type { FunctionComponent } from "../common/types";
import { useQuery } from "@tanstack/react-query";
import { getPlayer, getPlayerByTeam, SORT_TYPE } from "../features/player-instance/api";
import { Container } from "@mui/material";

export const Player = (): FunctionComponent => {
  const parameters = useParams()
  const [searchParameters] = useSearchParams();
  const sortByTeam = searchParameters.get('sort') === 'team' || false;
  const {id: playerId} = parameters
  
  const {data: playerData, isLoading: isPlayerDataLoading} = useQuery({
    queryKey: ['player', playerId],
    queryFn: async () => playerId ? getPlayer(playerId) : Promise.reject(new Error('Player ID is undefined')),
    enabled: !!playerId && !sortByTeam
  });

  const {data: playerByTeamData, isLoading: isPlayerByTeamLoading} = useQuery({
    queryKey: ['player-by-team', playerId],
    queryFn: async () => playerId ? getPlayerByTeam(playerId, {sort: SORT_TYPE.TEAM}) : Promise.reject(new Error('Player ID is undefined')),
    enabled: !!playerId && sortByTeam
  });

  return (
    <div>
      <p>Player ID: {playerId}</p>
      {isPlayerDataLoading || isPlayerByTeamLoading && (
        <p>Loading...</p>
      )}
      <Container maxWidth="sm">
        {playerData && (
          JSON.stringify(playerData)
        )}
        {playerByTeamData && (
          JSON.stringify(playerByTeamData)
        )}
      </Container>
    </div>
  );
}