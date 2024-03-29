export interface IItem {
  id: number;
  name: string;
  number: number;
  type: ItemType;
  weight: number;
}
export enum ItemType {
  HandLuggage = 1,
  Luggage = 2,
  SpecialLuggage = 3
}
