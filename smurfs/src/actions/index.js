import axios from "axios"

export const FETCH_START = "FETCH_START"
export const FETCH_GO = "FETCH_GO"

export const ADD_START = "ADD_SMURF"
export const ADD_GO = "BEEP"

export const fetchSmurfs = () => dispatch => {

    dispatch({type: FETCH_START})

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({
                type: FETCH_GO,
                payload: res
            })
        })
        .catch(err => console.log(err))
}

export const addSmurf = (smurf) => dispatch => {

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({
                type: ADD_GO,
                payload: res
            })
        })
        .catch(err => console.log(err))
}