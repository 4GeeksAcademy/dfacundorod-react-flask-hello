import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions}= useContext(Context)
	const navigate = useNavigate()

	function logout(){
		actions.logout();
		if(store.isLogin===false){
			navigate('/')
		}
		
	}


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<h3>Bienvenido a nuestro sevicio!!!</h3>
				<Link to="/singup">
					<button className="btn btn-success">Singup</button>
				</Link>
				{store.isLogin === true ? 
					<button onClick={logout} className="btn btn-danger">Logout</button>
					:null}
			</div>
		</nav>
	);
};
