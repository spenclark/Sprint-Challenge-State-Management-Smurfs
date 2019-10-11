import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SUCCESS, ADD_FAILURE } from '../actions'
const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
         return state;
         
    }
}

export default reducer