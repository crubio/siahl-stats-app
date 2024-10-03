import { useParams, useSearchParams } from "react-router-dom";
import type { FunctionComponent } from "../common/types";
import { useQuery } from "@tanstack/react-query";
import { getPlayer, getPlayerByTeam, SORT_TYPE } from "../features/player-instance/api";
import { Container, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import type { PlayerStats, PlayerByTeamStats } from "../features/player-instance/types";

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

  const {data: playerByTeamData, isLoading: isPlayerTeamDataLoading} = useQuery({
    queryKey: ['player-by-team', playerId],
    queryFn: async () => playerId ? getPlayerByTeam(playerId, {sort: SORT_TYPE.TEAM}) : Promise.reject(new Error('Player ID is undefined')),
    enabled: true
  });

  function renderStatsByTeam(stats: Record<string, PlayerByTeamStats>): JSX.Element {
    const teamStats = [];
    for (const key in stats) {
      teamStats.push(
        <TableRow>
          <TableCell>{key}</TableCell>
          <TableCell>{stats[key]?.GP}</TableCell>
          <TableCell>{stats[key]?.G}</TableCell>
          <TableCell>{stats[key]?.A}</TableCell>
          <TableCell>{stats[key]?.PIM}</TableCell>
          <TableCell>{stats[key]?.PTS}</TableCell>
          <TableCell>{stats[key]?.PPG}</TableCell>
          <TableCell>{stats[key]?.SHG}</TableCell>
        </TableRow>
      );
    }
    
    return (<>{teamStats}</>);
  }      

  function renderStats(stats: PlayerStats): JSX.Element {
    return (
      <TableRow>
        <TableCell>{stats.games_played}</TableCell>
        <TableCell>{stats.goals}</TableCell>
        <TableCell>{stats.assists}</TableCell>
        <TableCell>{stats.penalty_minutes}</TableCell>
        <TableCell>{stats.points}</TableCell>
        <TableCell>{stats.powerplay_goals}</TableCell>
        <TableCell>{stats.shorthanded_goals}</TableCell>
      </TableRow>
    );
  }

  return (
    <div>
      {(isPlayerDataLoading || isPlayerTeamDataLoading) && (
        <p>Loading stats...</p>
      )}
      <Container maxWidth="sm">
        {playerData && (
          <>
            <Paper elevation={0}  sx={{marginBottom: '8px', padding: '4px'}}>
              <Typography variant="h5" >
                <Link href={playerData.stats_url}>
                {playerData.full_name} - {playerId}
                </Link>
              </Typography>
            </Paper>
            <Paper sx={{marginBottom: '8px', padding: '4px'}}>
              <Typography variant="h4">
                Lifetime stats
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: '100%'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>GP</TableCell>
                      <TableCell>G</TableCell>
                      <TableCell>ASS</TableCell>
                      <TableCell>PIM</TableCell>
                      <TableCell>PTS</TableCell>
                      <TableCell>PPG</TableCell>
                      <TableCell>SHG</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderStats(playerData.stats)}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Paper sx={{marginBottom: '8px', padding: '4px'}}>
              <Typography variant="h4">
                Team stats
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: '100%'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Team</TableCell>
                      <TableCell>GP</TableCell>
                      <TableCell>G</TableCell>
                      <TableCell>ASS</TableCell>
                      <TableCell>PIM</TableCell>
                      <TableCell>Points</TableCell>
                      <TableCell>PPG</TableCell>
                      <TableCell>SHG</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {playerByTeamData?.team_stats && renderStatsByTeam(playerByTeamData.team_stats)}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </>
        )}
      </Container>
    </div>
  );
}