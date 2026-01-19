
export enum ServiceTab {
  TRANSPORT = 'Transport',
  COLIS = 'Colis',
  ARGENT = 'Argent'
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  flag: string;
}

export interface Feature {
  title: string;
  icon: string;
  active?: boolean;
}
