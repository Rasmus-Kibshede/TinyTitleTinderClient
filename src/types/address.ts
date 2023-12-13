import { Location } from "./location";

export interface Address {
    addressId: number;
    city: string;
    zipcode: string;
    street: string;
    location: Location;
}