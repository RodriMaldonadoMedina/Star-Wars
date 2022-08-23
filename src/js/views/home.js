import React from "react";
import "../../styles/home.css";
import Carrusel from "../component/carrusel.jsx";

export const Home = () => (
	<div className="container">
		<h2>Personajes</h2>
		<Carrusel id={"carouselPersonajes"} />
		<h2>Planetas</h2>
		<Carrusel id={"carouselPlanetas"}/>
		<h2>Naves</h2>
		<Carrusel id={"carouselNaves"}/>
	</div>
);

