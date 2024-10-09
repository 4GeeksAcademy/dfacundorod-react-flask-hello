import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

export function Login(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    const login= (e)=>{
        e.preventDefault()
        

    }
    console.log(email)
    console.log(password)
    return (
        <div>
            <div>
                <div className='container d-flex justify-content-center my-3'>
                    <h1>Login!</h1>
                </div>
                <form className='container col-3' >
                    <div>                
                        <label className="h5" htmlFor="email">Email</label>
                        <input className="form-control mb-4" type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                        <label className="h5" htmlFor="password" placeholder='Password'>Password</label>
                        <input className="form-control mb-4" type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}  />
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <button className='btn btn-secondary' onClick={()=>{navigate('/')}}>Cancel</button>
                        <button className='btn btn-success'>Login!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}