import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CardExtendido = () => {
  const { store } = useContext(Context);
  let { id, tipo } = useParams();
  console.log(store.naves[id - 1].diameter);

  switch (tipo) {
    case "personaje":
      return (
        <div
          className="container card mb-3 border-0 my-5"
          style={{ maxWidth: "60rem" }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://www.lavanguardia.com/files/image_948_465/uploads/2017/08/10/5fa3c74b1cd74.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{store.personajes[id - 1].name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="my-3 border border-2 border-danger border-bottom-0 border-end-0 border-start-0">
            <div className="row ms-0">
              <table>
                <thead>
                  <tr>
                    <th className="px-2">Name</th>
                    <th className="px-2">Birth Year</th>
                    <th className="px-2">Gender</th>
                    <th className="px-2">Height</th>
                    <th className="px-2">Skin Color</th>
                    <th className="px-2">Eye Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2">{store.personajes[id - 1].name}</td>
                    <td className="px-2">{store.personajes[id - 1].birth_year}</td>
                    <td className="px-2">{store.personajes[id - 1].gender}</td>
                    <td className="px-2">{store.personajes[id - 1].height}</td>
                    <td className="px-2">{store.personajes[id - 1].skin_color}</td>
                    <td className="px-2">{store.personajes[id - 1].eye_color}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case "planeta":
      return (
        <div
          className="container card mb-3 border-0 my-5"
          style={{ maxWidth: "800px" }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://www.lavanguardia.com/files/image_948_465/uploads/2017/08/10/5fa3c74b1cd74.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{store.planetas[id - 1].name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="my-3 border border-2 border-danger border-bottom-0 border-end-0 border-start-0">
          <div className="row ms-0">
              <table>
                <thead>
                  <tr>
                    <th className="px-2">Name</th>
                    <th className="px-2">Diameter</th>
                    <th className="px-2">Climate</th>
                    <th className="px-2">Gravity</th>
                    <th className="px-2">Terrain</th>
                    <th className="px-2">Population</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2">{store.planetas[id - 1].name}</td>
                    <td className="px-2">{store.planetas[id - 1].diameter}</td>
                    <td className="px-2">{store.planetas[id - 1].climate}</td>
                    <td className="px-2">{store.planetas[id - 1].gravity}</td>
                    <td className="px-2">{store.planetas[id - 1].terrain}</td>
                    <td className="px-2">{store.planetas[id - 1].population}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case "nave":
      return (
        <div
          className="container card mb-3 border-0 my-5"
          style={{ maxWidth: "800px" }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://www.lavanguardia.com/files/image_948_465/uploads/2017/08/10/5fa3c74b1cd74.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{store.naves[id - 1].name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="my-3 border border-2 border-danger border-bottom-0 border-end-0 border-start-0">
          <div className="row ms-0">
              <table>
                <thead>
                  <tr>
                    <th className="px-2">Model</th>
                    <th className="px-2">Manufacturer</th>
                    <th className="px-2">Cost in credits</th>
                    <th className="px-2">Passengers</th>
                    <th className="px-2">Cargo capacity</th>
                    <th className="px-2">Star ship class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2">{store.naves[id - 1].model}</td>
                    <td className="px-2">{store.naves[id - 1].manufacturer}</td>
                    <td className="px-2">{store.naves[id - 1].cost_in_credits}</td>
                    <td className="px-2">{store.naves[id - 1].passengers}</td>
                    <td className="px-2">{store.naves[id - 1].cargo_capacity}</td>
                    <td className="px-2">{store.naves[id - 1].starship_class}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    default:
      return <h1>No hay nada que mostrar!</h1>;
  }
};

export default CardExtendido;
