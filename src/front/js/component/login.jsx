import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react/cjs/react.development'
import { Context } from '../store/appContext'



export function Login(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()
    const{store, actions}=useContext(Context)
    
    const login=(e, email, password)=>{
        e.preventDefault()
        actions.login(email, password)
        if (store.isLogin === true){
            navigate('/private')
        }
    }
    
    return (
        <div className='d-flex align-items-center justify-content-center h-75'>
                <h1 className='container d-flex justify-content-end col-4 me-1 text-primary '>Login!</h1>
                <form onSubmit={(e)=>{login(e, email, password)}} className='container col-4 ms-2' >
                    <div>                
                        <label className="h5" htmlFor="email">Email</label>
                        <input className="form-control mb-4 --bs-primary-border-subtle" type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                        <label className="h5" htmlFor="password" placeholder='Password'>Password</label>
                        <input className="form-control mb-4" type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}  />
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <button className='btn btn-secondary'>Cancel</button>
                        <button className='btn btn-success'>Login!</button>
                    </div>
                </form>
            
        </div>
    )
}