export const CHECK_USER_LOGINED = "CHECK_USER_LOGINED";
export const CHECK_USER_LOGINED_FAIL = "CHECK_USER_LOGINED_FAIL";
export const CHECK_USER_LOGINED_SUCCESS = "CHECK_USER_LOGINED_SUCCESS";



export function checkUserLogined(user){
    return {
        type: CHECK_USER_LOGINED,
        user
    }
}

export function checkUserLoginedFail(reason){
    return {
        type: CHECK_USER_LOGINED_FAIL,
        reason
    }
}


export function checkUserLoginedSuccess(user){
    return {
        type: CHECK_USER_LOGINED_SUCCESS,
        user
    }
}