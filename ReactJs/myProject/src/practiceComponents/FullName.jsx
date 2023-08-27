import React from 'react';

const user = 
{
    FirstName: "Nissa",
    LastName: "Montano"
}

const FullName = () =>
{
    return(

        <h1>{user.FirstName} {user.LastName}</h1>

    );
}


export default FullName;
