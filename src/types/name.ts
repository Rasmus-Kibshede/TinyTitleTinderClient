import { Meaning } from "./meaning";
import { Origin } from "./origin";

export interface Name {
    id?: number,
    nameSuggestName: string,
    origins: Origin[],
    meanings: Meaning[],
    gender: string,
}