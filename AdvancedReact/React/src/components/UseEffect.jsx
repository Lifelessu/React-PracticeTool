import { useState, useEffect } from "react";

function UseEffect()
{
    const url = 'https://api.github.com/users';
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        console.log('use effect');
    
        const fetchData = async()=>{
            try {
                const response = await fetch(url)
                const users = await response.json()
                console.log(users);
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
            
        };
        fetchData();
    },[])

    return(
        <div>
            <h1>testing</h1>
            {users.map((user) =>{
                const {id, login, avatar_url, html_url} = user
                return(
                    <div key={id}>
                        <ul>
                            <li>{login}</li>
                            <li><img style={{maxWidth:'50px'}} src={avatar_url}/></li>
                            <li>{html_url}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default UseEffect;