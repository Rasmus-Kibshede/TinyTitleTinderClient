export interface User {
  email: string;
  roles: Role[] | Role;
}

export interface Parent extends User {
  parentId: number;
  fistName: string;
  lastName: string;
  gender: string;
  age: number;
}