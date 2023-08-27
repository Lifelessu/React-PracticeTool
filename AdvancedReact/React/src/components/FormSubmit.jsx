import React from 'react'
import { useState } from 'react';

const FormSubmit = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState();

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    var combine = name+email;
    setText(combine);
    console.log('form submitted');
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type='text' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
            <div>
                {text}
            </div>
            
        </form>
    </div>
  );
}

;export default FormSubmit