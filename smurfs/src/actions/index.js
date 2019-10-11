import axios from 'axios'

export const START_FETCHING = "START_FETCHING"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAILURE ="ADD_FAILURE"
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING})
    axios
        .get('http://localhost:3333/smurfs')
        .then( res =>
            dispatch({ 
                type: FETCH_SUCCESS,
                payload: res.data
             })
        )
        .catch(err =>
             dispatch({
                type: FETCH_FAILURE,
                payload: err.response
             }));
            
            
    }

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SUCCESS })

    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then( res =>
            dispatch({ 
                type: ADD_SUCCESS,
                payload: res.data
             })
        )
        .catch(err =>
             dispatch({
                type: ADD_FAILURE,
                payload: err.response
             }));
            
}