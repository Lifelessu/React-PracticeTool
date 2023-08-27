import React from "react";

const cities = ['Manila', 'Bacolod', 'Cebu', 'Davao'];
const selectCity = cities.filter((city) => city == 'Manila' || city=='Bacolod');
const person = [
    {
        id: 1,
        name: 'Mark Gregory Corpin',
        age: 22
    },

    {
        id: 2,
        name: 'wew wew',
        age: 24
    }

    
]
const list = () => 
{
    return(

        <div>
            <ul>
                {selectCity.map((city, index) =>(
                    <li key={index}>{city}</li>
                ))}
            </ul>

            <hr></hr>

            <h3>Table</h3>
            {person.length >0 && <div><table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map(data => {
                        return(
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.age >= 23 ? "Adult" : "Child" }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>}

        {person.length < 1 && <h1>No data to be display</h1>}
        </div>
    );
}

export default list;