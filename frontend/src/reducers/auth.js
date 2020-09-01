import {SIGNUP_FAIL,SIGNUP_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    loading:false  // remember to change loading to true
};


export default function(state = initialState, action){
    const {type,payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                token:payload.access,
                loading:false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading:true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                token:null,
                isAuthenticated:false,
                loading:false
            }
        default:
            return state
    }
}