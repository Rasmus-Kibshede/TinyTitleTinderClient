import { Address } from "./address";
import { User } from "./user";

export interface Parent extends User {
    parentId: number;
    fistName: string;
    lastName: string;
    gender: string;
    age: number;
    address: Address;
  }