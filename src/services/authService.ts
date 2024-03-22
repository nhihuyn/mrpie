import { client } from "./client";

export interface LoginData {
    email: string;
    password: string;
}

export interface ChangePasswordData {
    newPassword: string;
    confirmPassword: string;
}

export interface LoginSuccessResponse {
    status: 'success',
    session_id: string;
    redirect_to: string;
    user_id: string;
    user_email: string;
    user_phone: number;
}

export interface ErrorResponse {
    status: 'error';
    msg?: string;
}

export interface RegisterSuccessResponse {
    status: 'success',
    user_id: string,
}

export interface RecoverPasswordSuccess {
    status: 'success',
    user_id: string,
}

export interface ChangePasswordSuccess {
    status: 'success',
    user_id: string,
}


export const loginRequest = (login: LoginData) => 
    client.post<ErrorResponse | LoginSuccessResponse>("/login", { login });

export const registerRequest = (user: { name: string, email: string, phone: number, password: string, rePassword: string}) =>
    client.post<ErrorResponse | RegisterSuccessResponse>("/register", { user })

export const recoverPassword = (email: string ) =>
    client.post<ErrorResponse | RecoverPasswordSuccess>("recoverPassword", { email })

export const changePassword = (data: ChangePasswordData) =>
    client.put<ErrorResponse | ChangePasswordSuccess>("user/password", data)