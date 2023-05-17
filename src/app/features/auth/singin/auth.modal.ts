export interface SinginCredentials{
    email: string;
    password: string;
}
export interface SingupCredentials extends SinginCredentials{
    displayName:string;
}