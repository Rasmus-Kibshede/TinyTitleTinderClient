import { Origin } from "./origin";
export interface Name {
    nameSuggestId?: number,
    nameSuggestName: string,
    origins: Origin[],
    gender: string,
    nameDays: string,
    namesakes: string
}