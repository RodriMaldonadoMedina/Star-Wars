import React from "react";
import { Link } from "react-router-dom";

const Card = ({name,id,tipo})=>{
    return ( 
        <div className="card w-100 d-inline-block bg-secondary" style={{height:"100%"}}> 
            <img src="https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg" className="card-img-top" alt="..." />
            <div className="card-body bg-opacity-5">
                <h5 className="card-title text-light">{name}</h5>
                <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/cardExtendido/${tipo}/${id}`} className="btn btn-outline-dark btn-outline:hover text-light">Ver mas</Link>    
            </div>
        </div>
  )
}

export default Card;