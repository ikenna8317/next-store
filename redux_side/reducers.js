
import { constants } from './constants';


export default function rootReducer(state, action) {
    switch(action.type) {
        case  constants.QUERY_GO:
            return { ...state, searchQuery: action.payload }

        //TODO: fix
        case constants.UPDATE_USER_CRED:
            return { ...state, userCred: action.payload }
            
        case constants.LOGIN_SUCCESS:
            return {...state, userCred: action.payload}

        case constants.ADD_TO_CART:
        //if there is no occurence of the product item to be added in the cart then add it,
            // otherwise re-return the state 

            if (state.cartItems.map(item => item.name).indexOf(action.payload.name) === -1) {
                return {...state, cartItems: [...state.cartItems, action.payload]}
            }

            return state
            
        case constants.REMOVE_FROM_CART:
            let cartItemsCopy = [...state.cartItems]
            const targetIndex = cartItemsCopy.map(item => item.name).indexOf(action.payload)
            cartItemsCopy.splice(targetIndex, 1)

            return {...state, cartItems: cartItemsCopy}

        case constants.ADD_TO_FAVORITES:

            //if there is no occurence of the product item to be added in the cart then add it,
            // otherwise re-return the state 

            if (state.favItems.map(item => item.name).indexOf(action.payload.name) === -1) {
                return {...state, favItems: [...state.favItems, action.payload]}

            }

            return state

        case constants.REMOVE_FROM_FAVORITES:
            let favItemsCopy = [...state.favItems]
            const _targetIndex = favItemsCopy.map(item => item.name).indexOf(action.payload)
            favItemsCopy.splice(_targetIndex, 1)

            return {...state, favItems: favItemsCopy}

        default:
            return state;
    }
}

