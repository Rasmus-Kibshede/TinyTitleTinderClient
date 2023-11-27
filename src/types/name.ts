import { Origin } from "./origin";
export interface Name {
    nameId?: number,
    nameSuggestName: string,
    origins: Origin[],
    gender: string,
}