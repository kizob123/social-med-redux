import {createStore} from 'redux'
import { actions_ } from './actions_types';
const log_in = (state={login:false,email:'',password:''}, action)=>{
    console.log('in action', action.payload);
    if(action.type===actions_.login){
        console.log('in action=1');
        return {
            login:action.payload.login,
            email:action.payload.email,
            password:action.payload.password
            }
    }
    if (action.type === actions_.signOut) {
        console.log('in action-2');

        return {
            login: false,
            email: '',
            password: ''
        }
    }
    return state;
}
const login = createStore(log_in)
export default login