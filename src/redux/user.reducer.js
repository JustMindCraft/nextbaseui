import { CHECK_USER_LOGINED, CHECK_USER_LOGINED_FAIL, CHECK_USER_LOGINED_SUCCESS, EXPECT_SMS_USER_LOGIN, SMS_USER_LOGIN_SUCCESS, SMS_USER_LOGIN_FAIL } from "./user.action";

export default function UserReducer(state={
    logining: false,
}, action){
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

        case EXPECT_SMS_USER_LOGIN:
            return Object.assign({}, state, {
                logining: true,
            })

        case SMS_USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                ...action.user
            })

        case SMS_USER_LOGIN_FAIL:
            return Object.assign({}, state, {
                ...action.reason
            })
    
        default:
            return state;
    }
}