import { useState } from "react";

function ToDos(props) {
    
    // States
    const [isClicked, setIsClicked] = useState(false);

    // Item line-through
    function itemClick() {
        setIsClicked(!isClicked);
    }

    // Delete Task
    function deleteTask() {
        props.deleteTask(props.id);
    }

    return (
        <div className="d-flex justify-content-between align-items-center pt-1 pb-1 mt-3 mb-2 rounded-2 bg-todos">
            <p style={{textDecoration: isClicked ? "line-through" : "none"}} onClick={itemClick} 
                className="p-2">{props.item} 
            </p>
            <svg 
                style={{cursor: "pointer"}}
                onClick={deleteTask}
                xmlns="http://www.w3.org/2000/svg" 
                width="18" height="24" fill="currentColor" 
                className="bi bi-trash-fill me-2" 
                viewBox="0 0 16 16">
                 <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </div>
    )

}

export default ToDos;