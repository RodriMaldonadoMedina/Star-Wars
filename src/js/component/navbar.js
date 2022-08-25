import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light bg-dark mb-3 bg-opacity-10">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{width:"100px", height:"100px"}}/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary float-end">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
}
