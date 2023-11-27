import { Address } from "./address";

export interface Parent {
    parentId: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    address: Address;
  }