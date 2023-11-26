import { Origin } from "./origin";
export interface Name {
    id?: number,
    nameSuggestName: string,
    origins: Origin[],
    gender: string,
}