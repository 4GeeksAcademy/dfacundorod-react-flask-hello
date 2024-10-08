import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
export function Signup(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    const singup= async (e)=>{
        e.preventDefault();
        console.log(e)
        const response = await fetch('https://scaling-engine-qjg4pw975jphxj67-3001.app.github.dev/api/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        if (response.ok){
            console.log('user created')
            navigate('/login')
        }

    }
    console.log(email)
    return (
        <div>
            <div>
                <div className='container d-flex justify-content-center my-3'>
                    <h1>Singup!</h1>
                </div>
                <form onSubmit={singup} className='container col-3' >
                    <div>                
                        <label className="h5" htmlFor="email">Email</label>
                        <input className="form-control mb-4" type="email" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                        <label className="h5" htmlFor="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password'>Password</label>
                        <input className="form-control mb-4" type="password" id="password" />
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <button className='btn btn-secondary'>Cancel</button>
                        <button className='btn btn-success'>Signup!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}