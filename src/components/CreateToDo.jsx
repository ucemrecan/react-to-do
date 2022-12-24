import { useState } from "react";

function CreateToDo(props) {

    // States
    const [newTask, setTask] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    // Handle Change
    function handleChange(event) {
        setTask(event.target.value);
    }


    // Submit Task
    function submitTask(event) {
        // check form validation
        if(!newTask){
            setErrorMessage('Please enter your task.');
            event.preventDefault();
        } else {
            setErrorMessage('');
            event.preventDefault();
            setTask("");
            props.addTask(newTask);
        }

    }


    // Return
    return (
        <div>                
            <p className="mb-2" style={{color: "red"}}>{errorMessage}</p>
            <form className="d-flex justify-content-between">
                <input 
                    style={{borderStyle: "dashed"}}
                    onChange={handleChange} 
                    className="form-control border-top-0 border-end-0 border-start-0 rounded-0 pe-5 me-2" 
                    name="newTask" 
                    placeholder="New task..."
                    value={newTask}
                />
                <button 
                    className="btn addBtn"
                    type="submit"
                    onClick={submitTask}>
                    Add
                    </button>
            </form>
        </div>
    )

}


export default CreateToDo;