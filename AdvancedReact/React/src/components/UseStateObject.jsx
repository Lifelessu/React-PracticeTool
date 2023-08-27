import React from "react";
//import {data} from '../data';

function UseStateObject ()
{   
    //other method
    // const [name, setName] = React.useState('');
    // const [age, setAge] = React.useState(0);
    // const [hobby, setHobby] = React.useState('')
    const [person, setPerson] = React.useState({
        name: '',
        age: 0,
        hobby: ''
    });
    const DisplayPerson = () =>
    {
        setPerson({name:'Mark', age:23, hobby:'Play Games'});
        //other method
        // setName('Mark');
        // setAge(25);
        // setHobby('Play Games');
    }

    return(
        <div>
            <h2 style={{textAlign:'text-center'}}>UseState Object Example</h2>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <h2>{person.hobby}</h2>
            <button onClick={()=>DisplayPerson()}>Show</button>
        </div>
    );
}

export default UseStateObject;