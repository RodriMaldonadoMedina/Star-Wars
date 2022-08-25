import React, { useContext } from "react";
import Card from "./card.jsx";
import { Context } from "../store/appContext";


const Carrusel = () => {
  const {store} = useContext(Context);

  return (
    <div>
      <h2 className="my-3">Personajes</h2>
      <div className="row miRow bg-secondary d-flex flex-column relative">
        {
        store.personajes &&   
          (store.personajes.length > 0) ? 
            (store.personajes.map(personaje=>{
              return ( 
                <div key={personaje.uid} className="col-3" style={{height:"100%"}}>
                  <Card name={personaje.name} id={personaje.uid}/>
                </div>
                )
              }
            )) : null
        }
      </div>
      <h2 className="my-3">Planetas</h2>
      <div className="row miRow bg-secondary d-flex flex-column relative">
      {
      store.planetas &&   
        (store.planetas.length > 0) ? 
          (store.planetas.map(planeta=>{
            return ( 
              <div key={planeta.uid} className="col-3" style={{height:"100%"}}>
                <Card name={planeta.name}/>
              </div>
              )
            }
          )) : null
      }
    </div>
    <h2 className="my-3">Naves</h2>
    <div className="row miRow bg-secondary d-flex flex-column relative">
      {
      store.naves &&   
        (store.naves.length > 0) ? 
          (store.naves.map(naves=>{
            return ( 
              <div key={naves.uid} className="col-3" style={{height:"100%"}}>
                <Card name={naves.name}/>
              </div>
              )
            }
          )) : null
      }
    </div>
    </div>
  )
}
export default Carrusel;
