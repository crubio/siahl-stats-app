export type PlayerStats = {
  player_id: number,
  full_name: string,
  stats: Array<string>,
  games_played: number,
  goals: number,
  assists: number,
  penalty_minutes: number,
  points: number,
  powerplay_goals: number,
  shorthanded_goals: number
};

export type PlayerByTeamStats = {
  GP: number,
  G: number,
  A: number,
  PIM: number,
  PTS: number,
  PPG: number,
  SHG: number
};

export type Player = {
  player_id: number,
  full_name: string,
  stats_url: string,
  stats: PlayerStats,
};

export type TeamStats = {
  [key: string]: string
};

export type PlayerByTeam = {
  player_id: number,
  full_name: string,
  stats_url: string,
  team_stats: Record<string, PlayerByTeamStats>,
};

export enum STAT_KEYS {
  games_played = 'GP',
  goals = 'G',
  assists = 'A',
  penalty_minutes = 'PIM',
  points = 'PTS',
  powerplay_goals = 'PPG',
  shorthanded_goals = 'SHG'
}
