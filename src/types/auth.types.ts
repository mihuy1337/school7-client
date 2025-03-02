
export interface ILoginForm {
	username: string
	password: string

}

export interface IRegisterForm {
  username: string;
	password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  classId?: string;
  role?: "student" | "teacher";
}

export interface IAuthResponse {
	accessToken: string
}

