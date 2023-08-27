import React, { useState } from "react";

function Conditional()
{
    const [valueText, setValue] = useState("");
    const CheckValue = (event) =>
    {
        event.preventDefault();
        var valueField = event.target.elements.values.value;
    
        if(valueField == 'Mark')
        {
            setValue("same name");
        }
        
        else
        {
            setValue("diffent");
        }
    }

    return(
        <div>
            <form onSubmit={CheckValue}>
                <label>Enter a Name: </label>
                <input type ='text' placeholder='Enter a name' name='values'/>
                <button type="submit">submit</button>
                <h1>{valueText}</h1>
            </form>

        </div>

    );
}

export default Conditional;