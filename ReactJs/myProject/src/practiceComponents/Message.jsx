import React from "react";

const name = "Marky Corpuz"

const Message = () =>
{
    return(
        <h1>Good Morning, {FirstName()}</h1>
    );
}

const FirstName = () =>
{
    return <h1>Hello ths is {name}</h1>
}

export default Message;