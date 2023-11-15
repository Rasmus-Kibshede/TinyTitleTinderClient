import { Meaning } from "./meaning";
import { Origin } from "./origin";

export interface Name {
    id?: number,
    name: string,
    origins: Origin[],
    meanings: Meaning[],
    gender: string,
}