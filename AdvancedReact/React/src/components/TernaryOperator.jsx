import React from "react";
import { useState, useEffect } from "react";

function TernaryOperator()
{
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState('Mark');
    const [showAlert, setAlert] = useState(false);
    const [name, setToggleName] = useState(false);

    const Alert = () =>
    {
        return <React.Fragment>
            <div>
                <h1>Hello World</h1>
            </div>
        </React.Fragment>
    }
    
    const ToggleAlert = () =>
    {
        if(showAlert == true)
        {
            setAlert(false);
            return;
        }
        setAlert(true);
    }
    
    const AlertName = () =>
    {
        return(
            <div>
                <h2>You are Mark</h2>
            </div>
        );
    }

    const ToggleName = () =>
    {
        if(name)
        {
            setToggleName(false);
            return;
        }

        return setToggleName(true);
    }

    const [userr, setUserr] = useState(null);
    const [userLogout, setLogout] = useState('');

    const Login = () =>
    {
        setUserr('You are now log in');
        return;
    }

    const Logout = () =>
    {
        setUserr('Logged out');
        return;
    }

    {/*Practice*/}

    const [toggle, setToggle] = useState(false);

    // const ToggleComponent = () =>
    // {
    //     useEffect(()=>{
    //         console.log('wew');
    //         setInterval(() =>{
    //         console.log('countdown');
    //         },1000);
            
    //     },[]); 
    //     return <h1>Random Toggle Component</h1>
    // }

    const ToggleComponent = () =>
    {
        useEffect(()=>{
            const someFunc = () =>{

            };
            window.addEventListener('scroll', someFunc);
        },[]); 
        return <h1>Random Toggle Component</h1>
    }

    const ShowToggle = () =>
    {
        if(toggle)
        {
            setToggle(false);
            return;
        }

        return setToggle(true);
    }

    return(
        <div>
            {/* <button>{isEditing ? 'True' : 'False'}</button> */}
            {/* <h1>{user == 'Mark' ? 'This is Mark' : 'You are not Mark'}</h1> */}
            {/* <h2>{showAlert && <Alert/>}</h2>
            <button onClick={()=>ToggleAlert(!showAlert)}>Alert</button>*/}

            {toggle && <ToggleComponent/>}
            <button onClick={()=>ShowToggle(!toggle)}>Show Alert</button>
        </div>
    );
}

export default TernaryOperator;