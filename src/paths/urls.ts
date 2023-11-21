const base = 'http://localhost:3000/';

export const checkauthPath = `${base}checkauth`;

// TODO: Make dynamic so that ID is not hardcoded but dependent on the signed in user
export const getName = `${base}names/parent/1`;

export const getNames = `${base}names`;