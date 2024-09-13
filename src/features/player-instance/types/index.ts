export type Stats = {
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

export type Player = {
  player_id: number,
  full_name: string,
  stats_url: string,
  stats: Stats,
};

export type PlayerByTeam = {
  player_id: number,
  full_name: string,
  stats_url: string,
  team_stats: {key: Array<string>},
};