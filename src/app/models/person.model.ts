import { IItem } from './item.model';

export interface IPerson {
  id: number;
  name: string;
  order: number;
  items: IItem[];
}
