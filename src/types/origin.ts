import { Definition } from "./definition";
export interface Origin {
    id?: number,
    region: string,
    religion: string,
    description: string,
    definition: Definition,
}