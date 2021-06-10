import { constants } from './constants';

function gl_setSearchQuery(searchQuery) {
    return {
        type: constants.QUERY_GO,
        payload: searchQuery
    }
}

export { gl_setSearchQuery }