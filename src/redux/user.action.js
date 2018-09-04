import { User } from "leancloud-storage";

export const CHECK_USER_LOGINED = "CHECK_USER_LOGINED";
export const CHECK_USER_LOGINED_FAIL = "CHECK_USER_LOGINED_FAIL";
export const CHECK_USER_LOGINED_SUCCESS = "CHECK_USER_LOGINED_SUCCESS";
export const EXPECT_SMS_USER_LOGIN = "EXPECT_SMS_USER_LOGIN";
export const SMS_USER_LOGIN = "SMS_USER_LOGIN";
export const SMS_USER_LOGIN_FAIL = "SMS_USER_LOGIN_FAIL";
export const SMS_USER_LOGIN_SUCCESS = "SMS_USER_LOGIN_SUCCESS";


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

function expectSmsUserLogin(){
    return {
        type: EXPECT_SMS_USER_LOGIN
    }
}

function smsUserLoginSuccess(user){
    return {
        type: SMS_USER_LOGIN_SUCCESS,
        user,
    }
}

function smsUserLoginFail(reason){
    return {
        type: SMS_USER_LOGIN_FAIL,
        reason
    }
}

export function smsUserLogin(mobile, sms){
    return dispatch => {
        dispatch(expectSmsUserLogin());
        User.logInWithMobilePhoneSmsCode(mobile, sms).then(function (success) {
            dispatch(smsUserLoginSuccess(success));
        }, function (error) {
            dispatch(smsUserLoginFail(error));
        });

    }
    
}

