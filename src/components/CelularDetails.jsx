import React from "react";
import { DetailsCont } from "../estilos-componentes/styles-comp";
import { useParams } from "react-router-dom";
import dataCelu from "../data/dataCelu";

//Componente para los detalles del celulcar seleccionado
const CelularDetails = () => {
    const {nameCelular} = useParams();
    const detalles = dataCelu[nameCelular];
  
    return(
      <DetailsCont>
        <h3>Detalles del movil {nameCelular}</h3>
        <h4>Modelo: {detalles.modelo}</h4>
        <h4>Precio: {detalles.precio}</h4>
        <h4>Descrpcion: {detalles.dec}</h4>
      </DetailsCont>
    )
  }

export default CelularDetails;