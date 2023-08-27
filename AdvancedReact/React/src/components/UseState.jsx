import React from "react";
import { useState } from "react";

const UseStateBasic = () =>
{   
    const [value1, setValue1] = useState(25);
    const [value2, setValue2] = useState(26);
    const [total, setTotal] = useState(0);

    const Add = () =>
    {
        var num = value1 + value2;
        setTotal(num);
    }

    return(
        <div>
            <h1>{total}</h1>
            <button onClick={Add}>Click</button>
        </div>
    );
}

export default UseStateBasic;