import {data} from '../data';
import React from "react";

function UseStateArray () 
{
    const [people, setPeople] = React.useState(data);

    const removePeople = (id) =>
    {
        const character = people.filter((person) => person.id !== id);
        setPeople(character);
    }

    const clearAll = (id) =>
    {
        const character = people.filter((person) => person === id);
        setPeople(character);
    }

    return(
        <div>
            {people.map((person) =>{
                const {id, name} = person;
                return(
                    <div>
                        <div key={id}>
                            <h2>{name} {id}</h2>
                            <button onClick={()=>removePeople(id)}>Remove{id}</button>
                        </div>
                        <button onClick={()=>clearAll(id)}>Clear All</button>
                    </div>
                    
                    
                );
            })}
            
        </div>
    );
}

export default UseStateArray;