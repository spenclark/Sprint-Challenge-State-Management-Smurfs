import { FETCH_START, FETCH_GO, ADD_GO } from '../actions'

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_GO:
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }
        case ADD_GO:
            return {
                ...state,
                smurfs: action.payload.data
            }
        default:
            return state
    }
}