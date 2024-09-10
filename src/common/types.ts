export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export type Players = {
  player_id: number;
  full_name: string;
  stats_url: string;
};

export interface PlayerSearchResultsProps {
  searchResults: Array<Players>;
}

export interface Player {
  [key: string]: string;
}