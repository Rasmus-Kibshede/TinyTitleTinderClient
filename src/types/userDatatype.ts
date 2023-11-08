export interface User {
    email: string,
    roles: Role[] | Role
}


export interface Parent extends User {
    fistName: string,
    lastName: string,
}

