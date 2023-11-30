import { Address } from "./address";
import { Name } from "./name";
import { User } from "./user";

export interface Parent extends User {
  parentId: number;
  fistName: string;
  lastName: string;
  gender: string;
  age: number;
  address: Address;
  dislikedNames: Name[];
  likedNames: Name[];
}