import { Definition } from "./definition";
export interface Origin {
    originId?: number,
    region: string,
    religion: string,
    description: string,
    definition: Definition,
}