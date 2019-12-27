import { LOGIN,LOGOUT } from '../type';
export interface IUserData{
    name: string;
}
export interface IUserAccountAction{
    type : string;
    data: IUserData | null;
}

export const login = (data: IUserData) : IUserAccountAction => ({
    type: LOGIN,
    data: data,
});

export const logout = () : IUserAccountAction => {

    return {
        type: LOGOUT,
        data: null,
    }
}
