import { constants } from './constants';

function gl_setSearchQuery(searchQuery) {
    return {
        type: constants.QUERY_GO,
        payload: searchQuery
    }
}

// TODO: 
function gl_updateUserCred(userCred) {
    return {
        type: constants.UPDATE_USER_CRED,
        payload: userCred
    }
}

function gl_setLoginSuccess(userCred) {
    return {
        type: constants.LOGIN_SUCCESS,
        payload: userCred
    }
}


function gl_addToCart(item) {
    return {
        type: constants.ADD_TO_CART,
        payload: item
    }
}

//pid: product id or name
function gl_removeFromCart(pid) {
    return {
        type: constants.REMOVE_FROM_CART,
        payload: pid
    }
}

function gl_addToFavorites(item) {
    return {
        type: constants.ADD_TO_FAVORITES,
        payload: item
    }
}

function gl_removeFromFavorites(pid) {
    return {
        type: constants.REMOVE_FROM_FAVORITES,
        payload: pid
    }
}

function gl_allowSkipAuth() {
    return {
        type: constants.SKIP_AUTH,
        payload: true
    }
}

export { 
    gl_setSearchQuery,
    gl_updateUserCred,
    gl_allowSkipAuth, 
    gl_setLoginSuccess, 
    gl_addToCart, 
    gl_removeFromCart, 
    gl_addToFavorites, 
    gl_removeFromFavorites
 }