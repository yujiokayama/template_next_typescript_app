import { atom } from 'recoil';

export const todoAtomState = atom<string>({
  key: 'todoAtom',
  default: '',
});
