import { useAuthUserStore } from "../store/user";

const id = useAuthUserStore.getState().authUser?.parent.parentId;
const base = 'http://localhost:3000/';

export const getNames = `${base}names`;
export const getName = `${base}names/parent/`;
export const updateTableNames = `${base}parents/${id}/tables`;
export const checkAuthPath = `${base}checkauth`;
export const logout = `${base}logout`;
export const login = `${base}login`;