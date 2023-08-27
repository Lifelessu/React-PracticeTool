import React from "react";

const Greeting = () =>
{
    // typical of initiating html element
    return(
        <div style={{background:"red", maxWidth:"450px", margin:"0 auto",
        padding:"10px", color:"white"}}>
            <h1>Hello World with Div</h1>
            
            {/*Option 1 for nesting*/}
            {Nest()}
            {/*Option 2 for nesting*/}
            <Nest/>
        </div>
    );
}

// this component will be use for nest components
const Nest = () =>
{
    return <h1>Nest Component</h1>
}

// using createElement for html element
/*const Greeting = () =>
{
    
    var greet = React.createElement('h1', {}, 'Hello World');

    return greet;
}*/


export default Greeting;