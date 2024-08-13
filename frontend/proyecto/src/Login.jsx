import React, { useState } from "react";
import axios from 'axios';

export function Login() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login',{email,password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" placeholder="email" onChange ={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="contraseña" onChange ={e => setPassword(e.target.value)}/>
                </div>
                <button>INGRESAR</button>
            </form>
        </main>
    )
    
}