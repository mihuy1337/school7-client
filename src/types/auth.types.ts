import { IRoles } from "./roles.types";

export interface ILoginForm {
	username: string
	password: string

}

export interface IRegisterForm {
	id: string;
  username: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  classId?: string;
  role?: IRoles;
}

export interface IAuthResponse {
	accessToken: string
}

