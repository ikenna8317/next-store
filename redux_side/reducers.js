
import { constants } from './constants';


export default function rootReducer(state, action) {
    switch(action.type) {
        case  constants.QUERY_GO:
            return { ...state, searchQuery: action.payload }
        default:
            return state;
    }
}

