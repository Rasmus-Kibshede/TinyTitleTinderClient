import { Parent } from "./parent";

export interface User {
  email: string;
  roles: Role[] | Role;
  parent: Parent;
}

