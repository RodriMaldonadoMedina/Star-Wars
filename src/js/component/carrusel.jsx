import React, { useContext } from "react";
import Card from "./card.jsx";
import { Context } from "../store/appContext";

const Carrusel = () => {
  const { store } = useContext(Context);
  const tipo = ["personaje", "planeta", "nave"];
  return (
    <>
      <h2 className="my-3 text-danger">Personajes</h2>
      <div className="row miRow bg-secondary d-flex flex-column relative bg-opacity-10">
        {store.personajes && store.personajes.length > 0
          ? store.personajes.map((personaje, indice) => {
              return (
                <div key={indice} className="col-3 " style={{ height: "100%" }}>
                  <Card item={personaje} id={indice + 1} tipo={tipo[0]} />
                </div>
               );
            })
          : null}
      </div>
      <h2 className="my-3 text-danger">Planetas</h2>
      <div className="row miRow bg-secondary d-flex flex-column relative bg-opacity-10">
        {store.planetas && store.planetas.length > 0
          ? store.planetas.map((planeta, indice) => {
              return (
                <div key={indice} className="col-3" style={{ height: "100%" }}>
                  <Card item={planeta} id={indice + 1} tipo={tipo[1]} />
                </div>
              );
            })
          : null}
      </div>
      <h2 className="my-3 text-danger">Naves</h2>
      <div className="row miRow bg-secondary d-flex flex-column relative bg-opacity-10">
        {store.naves && store.naves.length > 0
          ? store.naves.map((nave, indice) => {
              return (
                <div key={indice} className="col-3" style={{ height: "100%" }}>
                  <Card item={nave} id={indice + 1} tipo={tipo[2]} />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
export default Carrusel;
