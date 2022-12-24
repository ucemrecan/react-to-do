import {useState} from "react";

function Header(props) {

    // Set Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDay = new Date().toLocaleDateString("en-US", options);
    
    // States
    const [modeIcon, setIcon] = useState(true);

    // Set Icon State
    function iconState() {
        setIcon(!modeIcon);
    }

    // Return
    return (
        <div>
            <div className="d-flex justify-content-between mt-5"> 
                <p className=" headerP">Today</p>
                <div onClick={props.modeClick} >
                    <div onClick={iconState}>
                        <svg 
                            style={{display: modeIcon ? "" : "none"}}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="32" height="32" fill="currentColor" 
                            className="bi bi-toggle-off" viewBox="0 0 16 16">
                            <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
                        </svg>
                        <svg 
                            style={{display: modeIcon ? "none" : ""}}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="32" height="32" fill="currentColor" 
                            className="bi bi-toggle-on" viewBox="0 0 16 16">
                            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <h4>{currentDay}</h4>
        </div>
    )


}

export default Header;