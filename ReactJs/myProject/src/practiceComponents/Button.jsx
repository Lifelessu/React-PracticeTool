import React from "react";

const Button = () =>
{
    return(

        <div>
            <div>
                <button onClick={()=>{
                    alert("Hello");
                }}>click me</button>
            </div>

            <div>
                <button>back</button>
            </div>
        </div>


    );
}

export default Button;