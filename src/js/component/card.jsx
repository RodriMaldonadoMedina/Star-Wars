import React from "react";
import { Link } from "react-router-dom";

const Card = ({name})=>{
    return ( 
        <div className="card w-100 d-inline-block" style={{height:"100%"}}> 
            <img src="https://media.istockphoto.com/photos/the-scenery-of-the-film-star-wars-picture-id515604132?k=20&m=515604132&s=612x612&w=0&h=gE7uKcxKTR4cSxE8n8DGFpY5MkmolejYXpIgBUUDh9Q=" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/cardExtendido" className="btn btn-outline-primary btn-outline-primary:hover">Ver mas</Link>    
            </div>
            
        </div>
  )
}

export default Card;