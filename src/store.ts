import { atom } from "jotai";
import { IRoles } from "./types/roles.types";

export const roleAtom = atom<IRoles>({ role: 'student' });