import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context)
  return (
    <nav className="container navbar navbar-light bg-dark mb-3 bg-opacity-10">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{ width: "100px", height: "100px" }}/>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle text-warning" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favoritos {store.favoritos.length}
            </button>
			<ul className="dropdown-menu bg-secondary">
			{store.favoritos && store.favoritos.length 
				? store.favoritos.map((favorito,index)=>(
					<li key={index} >
            <Link to={`/cardExtendido/${favorito.tipo}/${favorito.id}`} className="dropdown-item text-warning">{favorito.item.name}</Link>
          </li>
					)
				)	
				:null
			}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
