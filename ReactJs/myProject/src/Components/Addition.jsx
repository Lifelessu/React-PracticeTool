//import React from "react";
import React, { useState } from "react";

function Addition ()
{
    const [firstValue, setFirstValue] = useState(5);
    const [secondValue, setSecondValue] = useState(10);
    const [totalValue, setTotalValue] = useState(0);
    
    const Add = (e) =>
    {
        e.preventDefault();
        console.log(e.target);
        var total = firstValue + secondValue;
    
        setTotalValue(total);
    }

    return(
        <div>
            <form onSubmit={Add}>
                <button type="submit">Submit</button>
                <h1>{totalValue}</h1>
            </form>
        </div>
        
    );
}

export default Addition;