import { useAuthUserStore } from "../store/user";

const id = useAuthUserStore.getState().authUser?.parent.parentId;
const base = 'http://localhost:3000/';
const name = '';

export const getNames = `${base}names`;
export const getName = `${base}names/parent/${id}`;
export const getNamebyName = `${base}names/name=${name}`;
export const updateTableNames = `${base}parents/${id}/tables`;
export const checkAuthPath = `${base}checkauth`;
export const logout = `${base}logout`;
export const login = `${base}login`;