import React, { useState } from "react";

function ButtonClick()
{
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState([]);

    const handleIncrement = () =>
    {
        //event.preventDefault();

        var number = count + 1;
        setCount(number);
        
    }

    const handleDecrement = () =>
    {
        var number = count - 1;
        setCount(number);
    }

    const showFruits = () =>
    {
        var fruits = ['Apple', 'Mango','Banana'];
        setFruit(fruits);
    }


    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={showFruits}>Show Fruits</button>
            <h1>Fruits: {fruit}</h1>

            <table>
                <tr>
                    <thead>
                        <th>Fruits</th>
                    </thead>
                </tr>
                {fruit.map((fruitus, index) =>(
                    <tr key={index}>
                        <td>{fruitus}</td>
                    </tr>
                ))}
              
            </table>
        </div>
    );
}

export default ButtonClick;