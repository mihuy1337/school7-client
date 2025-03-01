import { atom } from "jotai";
import { IRoles } from "./types/Roles";

export const roleAtom = atom<IRoles>({ role: 'student' });