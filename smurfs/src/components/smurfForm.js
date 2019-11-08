import React, {useState} from "react"
import {connect} from "react-redux"
import {addSmurf} from "../actions/"

const SmurfForm = (props) => {

    const [newSmurf, setNewSmurf ] = useState(
        {
            name: "",
            age: "",
            height: ""
        }
    )

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(newSmurf)
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        })
    }

    const handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <input name="age" type="text" placeholder="age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(SmurfForm)