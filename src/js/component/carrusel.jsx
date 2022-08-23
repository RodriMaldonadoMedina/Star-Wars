import React, { useState, useEffect } from "react";
import Card from "./card.jsx";

const Carrusel = ({id}) => {
  return (
    <div className="row bg-secondary my-3">
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev" style={{height: "30%", margin:"auto"}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next" style={{height: "30%", margin:"auto"}}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;