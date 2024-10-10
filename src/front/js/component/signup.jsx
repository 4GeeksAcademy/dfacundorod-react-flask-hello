import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react/cjs/react.development';
import { Context } from '../store/appContext';
export function Signup(){

    const{ store, actions } = useContext(Context)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    const singup= async (e)=>{
        e.preventDefault();
        actions.singup(email, password)
        navigate('/')
    }
    console.log(email)
    console.log(password)
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
                        <label className="h5" htmlFor="password"  placeholder='Password'>Password</label>
                        <input className="form-control mb-4" type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
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