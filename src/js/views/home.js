import React, { useContext } from "react";
import "../../styles/home.css";
import Carrusel from "../component/carrusel.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store} = useContext(Context);

	return (
		<div className="container">
			<h2>Personajes</h2>
			<Carrusel id={"carouselPersonajes"} personajes={store.personajes}/>
			<h2>Planetas</h2>
			<Carrusel id={"carouselPlanetas"}/>
			<h2>Naves</h2>
			<Carrusel id={"carouselNaves"}/>
		</div>
)
};

