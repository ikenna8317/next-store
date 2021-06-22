import { constants } from './constants';

function gl_setSearchQuery(searchQuery) {
    return {
        type: constants.QUERY_GO,
        payload: searchQuery
    }
}

// TODO: 
function gl_setLoginSuccess(userCred) {
    return {
        type: constants.LOGIN_SUCCESS,
        payload: userCred
    }
}

export { gl_setSearchQuery, gl_setLoginSuccess }