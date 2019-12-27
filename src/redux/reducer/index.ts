import {login, logout, IUserData, IUserAccountAction} from '../actions';
import { LOGIN, LOGOUT } from '../type';

interface ILoginState{
    data: IUserData | null;
}

const switchLoginState = (state: ILoginState = {data: null}, action: IUserAccountAction): ILoginState => {
    switch(action.type){
        case LOGIN:
            return state
        case LOGOUT:
            return {data: null}
        default:
            return state;
    }
}

export default switchLoginState;