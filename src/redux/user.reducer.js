import { CHECK_USER_LOGINED, CHECK_USER_LOGINED_FAIL, CHECK_USER_LOGINED_SUCCESS } from "./user.action";

export default function UserReducer(state={}, action){
    switch (action.type) {
        case CHECK_USER_LOGINED:
            return Object.assign({}. state, {
                ...action.user
            });
        
        case CHECK_USER_LOGINED_FAIL:
            return Object.assign({}. state, {
                ...action.reason
            })

        case CHECK_USER_LOGINED_SUCCESS:
            return Object.assign({}, state,{
                ...action.user
            })
    
        default:
            return state;
    }
}