import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CardExtendido = () => {

  const {store} = useContext(Context);
  let  params = useParams();

  console.log(params.theid)

  return (
    <div className="container card mb-3 border-0 my-5" style={{maxWidth: "800px"}}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src="https://www.lavanguardia.com/files/image_948_465/uploads/2017/08/10/5fa3c74b1cd74.jpeg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
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
        <p className="text-danger">aca van los atributos del char</p>
      </div>
    </div>
  );
};

export default CardExtendido;
