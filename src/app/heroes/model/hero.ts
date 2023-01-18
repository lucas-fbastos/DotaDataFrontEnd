import { Role } from './role';
export interface Hero {
  id: number;
  localizedName: string;
  name: string;
  primaryAttribute: string;
  attackType: string,
  image: string,
  icon: string,
  roles: Role[];
}
