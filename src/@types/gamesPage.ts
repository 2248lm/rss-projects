export interface IGamesPageProps {
  title: string;
  gameDescription: string;
  ruleDescription: string;
  keysDescription?: string;
  game: string;
}

export interface IСomment {
  high: [number, string],
  medium: [number, string],
  low: [number, string]
}
