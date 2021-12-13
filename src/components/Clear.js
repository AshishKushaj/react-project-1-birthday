import React from "react";

const Clear = ({message}) =>{

    return (
        <div className="pa2 tc bg-light-pink">

            <button 
                type="button"
                onClick={message}
            >Clear ALL</button>        

        </div>
    )
}

export default Clear;