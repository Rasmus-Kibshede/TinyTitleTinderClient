// import { useAuthUserStore } from "../store/user";

const id = 1;
const base = 'http://localhost:3000/';

export const checkAuthPath = `${base}checkauth`;
export const getName = `${base}names/parent/${id}`;
export const logout = `${base}logout`;
export const login = `${base}login`;
export const getNames = `${base}names`;
export const updateUser = `${base}user`;
export const updateParentURL = `${base}parents`;
