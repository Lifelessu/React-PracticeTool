import React, { useState, useEffect } from "react";

function count ()
{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // const handleIncrement = () =>
    // {   
    //     // setTimeout(() =>{
    //     //     setCount(count + 1);
    //     //     console.log(count);
    //     // }, 3000);
    //     //count = count + 1;
    //     setCount(count + 1 );
    // }

    // useEffect(()=>{
    //     console.log('useEffect');
    // })
    useEffect(()=>{
        //console.log("You just clicked me");
        setCount(count);    
    },[]);
    return(
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>First Value</button>
            <h1>{count2}</h1>
            <button type='button' onClick={()=>setCount2(count2+1)}>Second Value</button>
        </div>
    );
}

export default count;