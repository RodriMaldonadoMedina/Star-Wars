import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({item,id,tipo})=>{
    const { store, actions } = useContext(Context);

    const existeFavorito = () => {
        
        let fav = store.favoritos;
        let exist = false;
        
        if (fav && fav.length)
            fav.forEach((element)=>{
                if (element.item.name === item.name)
                    exist = true
            })
        return exist;
    }

    if (item){
    switch (tipo) {
        case "personaje":
        return ( 
            <div className="card w-100 d-inline-block bg-secondary  bg-opacity-50" style={{height:"100%"}}> 
                <img src="https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-opacity-5">
                    <h5 className="card-title text-warning mb-3">{item.name}</h5>
                    <p className="card-text text-light mb-1">Gender: {item.name}</p>
                    <p className="card-text text-light mb-4">Hair Color: {item.hair_color}</p>
                    <Link 
                        to={`/cardExtendido/${tipo}/${id}`} 
                        className="btn btn-outline-secondary btn-outline:hover text-light">
                            Ver mas
                    </Link>   
                    <span>
                        {!existeFavorito() ?
                        (<i className="bi bi-heart text-danger float-end miHeart" 
                            onClick={()=>actions.setFavoritos(item,tipo,id)}>
                        </i>)
                        :(<i className="bi bi-heart-fill text-danger float-end miHeart" 
                            onClick={()=>actions.borrarFavoritos(item.name)}>
                        </i>)}
                    </span> 
                </div>
            </div>
        );
        case "planeta":
        return ( 
            <div className="card w-100 d-inline-block bg-secondary  bg-opacity-50" style={{height:"100%"}}> 
                <img src="https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-opacity-5">
                    <h5 className="card-title text-warning mb-3">{item.name}</h5>
                    <p className="card-text text-light mb-1">Climate: {item.climate}</p>
                    <p className="card-text text-light mb-4">Population: {item.population}</p>
                    <Link 
                        to={`/cardExtendido/${tipo}/${id}`} 
                        className="btn btn-outline-secondary btn-outline:hover text-light">
                            Ver mas
                    </Link>   
                    <span>
                        {!existeFavorito() ?
                        (<i className="bi bi-heart text-danger float-end miHeart" 
                            onClick={()=>actions.setFavoritos(item,tipo,id)}>
                        </i>)
                        :(<i className="bi bi-heart-fill text-danger float-end miHeart" 
                            onClick={()=>actions.borrarFavoritos(item.name)}>
                        </i>)}
                    </span> 
                </div>
            </div>
        );
        case "nave":
        return ( 
            <div className="card w-100 d-inline-block bg-secondary  bg-opacity-50" style={{height:"100%"}}> 
                <img src="https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-opacity-5">
                    <h5 className="card-title text-warning mb-3">{item.name}</h5>
                    <p className="card-text text-light mb-1">Starship Class: {item.starship_class}</p>
                    <p className="card-text text-light mb-4">Hyperdrive Rating: {item.hyperdrive_rating}</p>
                    <Link 
                        to={`/cardExtendido/${tipo}/${id}`} 
                        className="btn btn-outline-secondary btn-outline:hover text-light">
                            Ver mas
                    </Link>   
                    <span>
                        {!existeFavorito() ?
                        (<i className="bi bi-heart text-danger float-end miHeart" 
                            onClick={()=>actions.setFavoritos(item,tipo,id)}>
                        </i>)
                        :(<i className="bi bi-heart-fill text-danger float-end miHeart" 
                            onClick={()=>actions.borrarFavoritos(item.name)}>
                        </i>)}
                    </span> 
                </div>
            </div>
        )}
    }else return null
}

export default Card;