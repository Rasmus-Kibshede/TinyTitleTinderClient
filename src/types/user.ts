import { Parent } from "./parent";

export interface User {
  email: string;
  password: string;
  roles: Role[] | Role;
  parent: Parent;
}

